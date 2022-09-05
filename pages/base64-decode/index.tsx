import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import promisify from '@utils/promisify';
import React from 'react';

const defaultValue = 'VGhhbmtzIGZvciB1c2luZyBvdXIgZGV2dG9vbA==';

const seo = {
  title: 'Base64 Decode',
  description: 'Use this tool to take a base64 encoded string and decode it.',
};

const converter = promisify((input : string) => atob(input));

export default function Index() {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h3" component="h1">
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
      <Divider style={{ margin: theme.spacing(2, 0) }} />
      <RenderTool
        converters={[converter]}
        defaultValue={defaultValue}
      />
    </>
  );
}
