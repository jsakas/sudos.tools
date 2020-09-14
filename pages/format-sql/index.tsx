import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useState } from 'react';
import sqlFormatter from 'sql-formatter-plus';

const initInput = 'select * from my_table where id = 1;';

const seo = {
  title: 'SQL Formatter',
  description: 'Use this tool to format and beautify SQL.',
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
      converted = sqlFormatter.format(userInput, {
        language: 'n1ql',
        uppercase: true,
        linesBetweenQueries: 1
      });
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
