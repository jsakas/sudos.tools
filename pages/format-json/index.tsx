import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import React, { useCallback, useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const initInput = '{"declaration":{"attributes":{"version":"1.0","encoding":"UTF-8"}},"elements":[{"type":"element","name":"urlset","attributes":{"xmlns":"http://www.sitemaps.org/schemas/sitemap/0.9"},"elements":[{"type":"element","name":"url","elements":[{"type":"element","name":"loc","elements":[{"type":"text","text":"http://www.example.com/"}]},{"type":"element","name":"lastmod","elements":[{"type":"text","text":"2005-01-01"}]},{"type":"element","name":"changefreq","elements":[{"type":"text","text":"monthly"}]},{"type":"element","name":"priority","elements":[{"type":"text","text":"0.8"}]}]}]}]}';

const seo = {
  title: 'JSON Formatter',
  description: 'Use this tool to format and beautify JSON.',
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
      converted = JSON.stringify(JSON.parse(userInput), null, 2);
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
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              }
            }}
            width="100%"
            height={500}
            language="json"
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
            language="json"
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
