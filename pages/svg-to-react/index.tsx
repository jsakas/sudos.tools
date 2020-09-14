import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import markdownToReact from 'markdown-to-react-loader/lib/markdown-to-react-loader';
import { NextSeo } from 'next-seo';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React, { useCallback, useEffect,useState } from 'react';

const initInput = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
<path
    d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z" />
</svg>`;

const seo = {
  title: 'SVG to React',
  description: 'Use this tool to convert SVG to React JSX.',
};

export default function Index() {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<Error>();
  
  const convert = useCallback((userInput  : string) : string => {
    setError(undefined);
    let converted = '';
  
    try {
      converted = markdownToReact(userInput);
      converted = prettier.format(converted, { semi: false, parser: 'babel', plugins: [parserBabel] });
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
      <NextSeo {...seo} />
      <Typography variant="h3" component="h1" gutterBottom>
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
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={10}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              convert(e.target.value);
            }}
            inputProps={{
              style: {
                fontFamily: 'monospace',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={10}
            value={output}
            onChange={(e) => {
              setOutput(e.target.value);
            }}
            inputProps={{
              style: {
                fontFamily: 'monospace',
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
  