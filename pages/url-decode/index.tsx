import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import React, { useCallback, useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const initInput = '';

const seo = {
  title: 'URL Decode',
  description: 'Use this tool to decode an encoded URL string',
};

export default function Index() {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<Error>();

  const convert = useCallback((userInput: string): string => {
    setError(undefined);
    let converted = '';

    try {
      converted = decodeURIComponent(userInput);
    } catch (e) {
      console.error(e);
      setError(e);
      return converted;
    }

    setOutput(converted);
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
            theme="vs-light"
            options={{
              minimap: {
                enabled: false,
              }
            }}
            width="100%"
            height={500}
            language="plaintext"
            value={input}
            onChange={(value) => {
              setInput(value);
              convert(value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MonacoEditor
            theme="vs-light"
            options={{
              minimap: {
                enabled: false,
              }
            }}
            width="100%"
            height={500}
            language="plaintext"
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
