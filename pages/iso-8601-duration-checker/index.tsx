import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { en, isoDuration } from '@musement/iso-duration';
import React, { useMemo, useState } from 'react';

isoDuration.setLocales(
  {
    en,
  },
  {
    fallbackLocale: 'en',
  }
);

const defaultValue = 'P3Y6M4DT12H30M5S';

const seo = {
  title: 'ISO 8601 Duration Checker',
  description: 'Use this tool parse and humanize an ISO 8601 Duration Value.',
};

export default function Index() {
  const theme = useTheme();

  const [input, setInput] = useState(defaultValue);

  const duration = useMemo(() => {
    return isoDuration(input);
  }, [input]);

  const parsed = useMemo(() => {
    return duration.parse();
  }, [duration]);

  const humanized = useMemo(() => {
    return duration.humanize('en');
  }, [duration]);

  return (
    <>
      <Typography variant="h3" component="h1">
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
      <Divider style={{ margin: theme.spacing(2, 0) }} />
      <Box margin="24px 0" maxWidth="500">
        <TextField
          fullWidth
          label="Input ISO 8601 Duration"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Box>


      <Box margin="24px 0">
        <Typography
          variant="h5"
          component="h2"
        >
        Humanized
        </Typography>
        <Typography>
          {humanized}
        </Typography>
      </Box>

      <Box margin="24px 0">
        <Typography
          variant="h5"
          component="h2"
        >
        Parsed
        </Typography>
        <Typography component="pre" style={{ fontFamily: 'monospace' }}>
          {JSON.stringify(parsed, null, 2)}
        </Typography>
      </Box>
    </>
  );
}