import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import markdownToReact from 'markdown-to-react-loader/lib/markdown-to-react-loader';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React, { useCallback, useEffect,useState } from 'react';

const initInput = `# Hello, World

This is a markdown document

- List item 1
- List item 2
- List item 3
`;

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
      <Typography variant="h3" component="h1" gutterBottom>
          Markdown to React
      </Typography>
      <Typography gutterBottom>
          Use this tool to convert markdown to React JSX.
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
  