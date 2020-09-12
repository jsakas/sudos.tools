import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import cssToJss from 'jss-cli/lib/cssToJss';
import React, { useCallback, useEffect,useState } from 'react';

const initCss = `.example {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100px 100px 100px;
  border-color: transparent transparent #007bff transparent;
}`;

export default function Index() {
  const theme = useTheme();
  const [css, setCss] = useState('');
  const [jss, setJss] = useState('');
  const [error, setError] = useState<Error>();

  const convert = useCallback((css  : string) : string => {
    setError(undefined);
    let jss = '';

    try {
      jss = cssToJss({
        code: css,
      });
    } catch (e) {
      console.error(e);
      setError(e);
      return jss;
    }

    setJss(JSON.stringify(jss, null, 2));
  }, []);

  useEffect(() => {
    setCss(initCss);
    convert(initCss);
  }, []);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Convert CSS to React JSS
      </Typography>
      <Typography gutterBottom>
        Use this tool to convert CSS styles to new React JSS syntax.
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
            value={css}
            onChange={(e) => {
              setCss(e.target.value);
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
            value={jss}
            onChange={(e) => {
              setJss(e.target.value);
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
