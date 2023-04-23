import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { en, isoDuration } from '@musement/iso-duration';
import { DurationObj } from '@musement/iso-duration/dist/types/types';
import React, { useEffect, useMemo, useState } from 'react';

isoDuration.setLocales(
  {
    en,
  },
  {
    fallbackLocale: 'en',
  }
);

const defaultValue = 'P3Y6M4DT12H30M5S';
const defaultValueParsed = isoDuration(defaultValue).parse();
// 
const seo = {
  title: 'ISO 8601 Duration Checker',
  description: 'Use this tool parse and humanize an ISO 8601 Duration.',
};

export default function Index() {
  const theme = useTheme();
  const [error, setError] = useState<Error>();
  const [input, setInput] = useState('');

  const [seconds, setSeconds] = useState(defaultValueParsed.seconds);
  const [minutes, setMinutes] = useState(defaultValueParsed.minutes);
  const [hours, setHours] = useState(defaultValueParsed.hours);
  const [days, setDays] = useState(defaultValueParsed.days);
  const [weeks, setWeeks] = useState(defaultValueParsed.weeks);
  const [months, setMonths] = useState(defaultValueParsed.months);
  const [years, setYears] = useState(defaultValueParsed.years);

  const duration = useMemo(() => {
    try {
      return isoDuration(input);
    } catch (e) {
      console.error(e);
    }
  }, [input]);

  useEffect(() => {
    try {
      const input = isoDuration({
        seconds,
        minutes,
        hours,
        days,
        weeks,
        months,
        years,
      }).toString();

      setInput(input);
    } catch (e) {
      // do nothing
    }
  }, [
    seconds,
    minutes,
    hours,
    days,
    months,
    weeks,
    years,
    setInput,
  ]);

  const parsed = useMemo(() => {
    try {
      return duration?.parse();
    } catch (e) {
      setError(e);
      console.error(e);
    }
  }, [duration]);

  useEffect(() => {
    let parsed: DurationObj;

    try {
      parsed = duration?.parse();
    } catch (e) {
      setError(e);
      console.error(e);
    }

    if (typeof parsed === 'object' && parsed !== null) {
      setSeconds(parsed.seconds);
      setMinutes(parsed.minutes);
      setHours(parsed.hours);
      setDays(parsed.days);
      setWeeks(parsed.weeks);
      setMonths(parsed.months);
      setYears(parsed.years);
    }
  }, [duration]);

  const humanized = useMemo(() => {
    try {
      return duration?.humanize('en');
    } catch (e) {
      return '';
    }
  }, [duration]);

  return (
    <>
      {error && (
        <Alert severity="error" style={{ margin: theme.spacing(2, 0) }}>{error.message}</Alert>
      )}

      <Typography variant="h3" component="h1">
        {seo.title}
      </Typography>

      <Typography gutterBottom>
        {seo.description}
      </Typography>

      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box maxWidth="500">
            <TextField
              fullWidth
              margin="normal"
              label="ISO 8601 Duration"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Years"
                variant="outlined"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Months"
                variant="outlined"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Weeks"
                variant="outlined"
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Days"
                variant="outlined"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Hours"
                variant="outlined"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Minutes"
                variant="outlined"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Seconds"
                variant="outlined"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
          >
            Parsed
          </Typography>
          <Typography component="pre" style={{ fontFamily: 'monospace' }}>
            {JSON.stringify(parsed, null, 2)}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
          >
            Humanized
          </Typography>
          <Typography>
            {humanized}
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <Typography variant="h4" component="h2">
        More about 8601 Durations
      </Typography>

      <Typography paragraph>
        ISO 8601 is a standard that provides a way to represent dates and times in a consistent and unambiguous way. One part of this standard is the representation of durations, which are used to specify a length of time.
      </Typography>

      <Typography paragraph>
        An ISO 8601 duration is a string of characters that represents a duration in a specific format. The format consists of a combination of years, months, days, hours, minutes, and seconds, represented in a specific order and separated by a letter &ldquo;T&rdquo;. For example, the duration of 1 year, 2 months, 3 days, 4 hours, 5 minutes, and 6 seconds would be represented as &ldquo;P1Y2M3DT4H5M6S&rdquo;.
      </Typography>

      <Typography paragraph>
        The &ldquo;P&rdquo; at the beginning of the string stands for &ldquo;period&rdquo;, and indicates that this is a duration. The &ldquo;T&rdquo; between the date portion and the time portion of the string indicates the start of the time portion. If any of the fields are zero, they can be omitted. For example, the duration of 1 day can be represented as &ldquo;P1D&rdquo;.
      </Typography>

      <Typography paragraph>
        ISO 8601 durations can be useful for representing a length of time in a standardized and unambiguous way, and can be used in a variety of applications such as scheduling, billing, and data storage.
      </Typography>
    </>
  );
}