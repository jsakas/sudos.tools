import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import React, { useCallback, useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Sass from 'sass.js/dist/sass.js';

// @ts-ignore
import sassWorker from '!!file-loader!sass.js/dist/sass.worker.js';

const sass = new Sass(sassWorker);

const initInput = `$primary: black;
$secondary: rgba($primary, .5);

.my-class {
  color: $secondary;

  body.loaded & {
    color: $primary;
  }
}
`;

const seo = {
  title: 'Sass Compiler',
  description: 'Use this tool to compile sass quickly in the browser.',
};

export default function Index() {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<Error>();

  const convert = useCallback((userInput: string): string => {
    setError(undefined);
    const converted = '';

    try {

      sass.compile(
        userInput,
        {
          style: Sass.style.expanded
        },
        function (converted) {
          if (converted.status === 1) {
            console.error(converted);
            setError(new Error(converted.message));
          }

          setOutput(converted.text);
        });

    } catch (e) {
      console.error(e);
      setError(e);
      return converted;
    }
  }, []);

  useEffect(() => {
    setInput(initInput);
    convert(initInput);
  }, []);

  return (
    <>

      <Typography variant="h3" component="h1">
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
      <Divider style={{ margin: theme.spacing(2, 0) }} />

      {error && (
        <Alert severity="error" style={{ margin: theme.spacing(2, 0) }}>{error.message}</Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MonacoEditor
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              }
            }}
            width="100%"
            height={500}
            language="scss"
            value={input}
            onChange={(value) => {
              setInput(value);
              convert(value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MonacoEditor
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              }
            }}
            width="100%"
            height={500}
            language="css"
            value={output}
            onChange={(value) => {
              setOutput(value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
