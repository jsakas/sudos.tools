import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { editor } from 'monaco-editor';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { pipeAsync } from 'utils/pipe';

import RenderOptions from './RenderOptions';

export type RenderToolProps = {
  converters: Pipeable[];
  defaultValue?: string;
  lang1?: monacoLanguages;
  lang2?: monacoLanguages;
  options?: ConfigurationOptions;
}

export type ConfigurationOptionsAction = {
  type: 'UPDATE_KEY',
  id: string;
  value: Field['value'];
}

function configurationOptionsReducer(state: ConfigurationOptions, action: ConfigurationOptionsAction): ConfigurationOptions {
  switch (action.type) {
  case 'UPDATE_KEY': {
    const { id, value } = action;

    return {
      ...state,
      [id]: {
        ...state[id],
        value: value
      }
    } as ConfigurationOptions;
  }
  default:
    return state;
  }
}

const converterWithOptions = (converter, options) => {
  return (input) => {
    return converter(input, options);
  };
};

const RenderTool: React.FC<RenderToolProps> = (props) => {
  const { converters, defaultValue, lang1, lang2 } = props;
  const [options, dispatch] = useReducer(configurationOptionsReducer, props.options);
  const theme = useTheme();
  const [input, setInput] = useState(defaultValue);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<Error | undefined>();

  const [, setInputEditor] = useState<editor.IStandaloneCodeEditor>();
  const [, setOutputEditor] = useState<editor.IStandaloneCodeEditor>();

  const clearError = () => setError(undefined);

  const convert = useCallback((userInput: string, options: ConfigurationOptions) => {
    const convertersWithOptions = converters.map(fn => converterWithOptions(fn, options));

    pipeAsync(...convertersWithOptions)(userInput)
      .then(setOutput)
      .then(clearError)
      .catch(setError);
  }, [converters, options]);

  useEffect(() => {
    convert(input, options);
  }, [input, convert]);

  return (
    <>
      {error && (
        <Alert severity="error" style={{ margin: theme.spacing(2, 0) }}>{error.message}</Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <MonacoEditor
            theme="vs-light"
            editorDidMount={(editor) => {
              setInputEditor(editor);
            }}
            options={{
              tabSize: Number(options.indent?.value || 2),
              minimap: {
                enabled: false,
              },
              rulers: [],
              // renderIndentGuides: true,
              detectIndentation: true,
            }}
            width="100%"
            height={500}
            language={lang1}
            value={input}
            onChange={(value) => {
              setInput(value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MonacoEditor
            theme="vs-light"
            editorDidMount={(editor) => {
              setOutputEditor(editor);
            }}
            options={{
              tabSize: Number(options.indent?.value || 2),
              minimap: {
                enabled: false,
              },
              rulers: [],
              // renderIndentGuides: true,
              detectIndentation: true,
            }}
            width="100%"
            height={500}
            language={lang2}
            value={output}
            onChange={(value) => {
              setOutput(value);
            }}
          />
        </Grid>
        {Object.keys(options).length > 0 && (
          <Grid item xs={12} md={2}>
            <Typography variant="h5" component="h2">
              Options
            </Typography>
            <RenderOptions
              options={options}
              dispatch={dispatch}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

RenderTool.defaultProps = {
  options: {},
  lang1: 'plaintext',
  lang2: 'plaintext',
};

export default RenderTool;