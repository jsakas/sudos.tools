import { useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React from 'react';


export default function Index() {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h3" component="h1">
        Welcome to Sudo&apos;s Tools!
      </Typography>
      <Typography gutterBottom>
        We created this website to help developers like ourselves. Many of the tools found here are tools we use often during our day-to-day development, and some were even used during the creation of this website!
      </Typography>
      <Typography gutterBottom>
        The website includes formatters, compilers, encoders, minifiers, and diff checkers. We really hope you enjoy using Sudo&apos;s Tools.
      </Typography>
      <Divider style={{ margin: theme.spacing(3, 0) }} />
      <Typography variant="h4" component="h2">
        We&apos;d love to know about your experience using Sudo&apos;s Tools
      </Typography>
      <Typography gutterBottom>
        Sudo&apos;s Tools is under active development. Your feedback will help us improve the tools and experience on our app. We really appreciate you taking the time to let us know about any bugs you&apos;ve encountered, features you&apos;d like to see, or any other feedback you&apos;d like to pass along.
      </Typography>

      <Button
        component="a"
        href="https://forms.gle/MFvcQGggL1cG1eCa7"
        variant="contained"
        color="secondary"
        target="_blank"
      >
        Send Feedback
      </Button>
    </>
  );
}
