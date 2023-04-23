import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import promisify from '@utils/promisify';
import React from 'react';

const defaultValue = 'VGhhbmtzIGZvciB1c2luZyBvdXIgZGV2dG9vbA==';

const seo = {
  title: 'Base64 Decode',
  description: 'Use this tool to take a base64 encoded string and decode it.',
};

const converter = promisify((input : string) => atob(input));

export default function Index() {
  return (
    <>
      <Typography variant="h3" component="h1">
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
      <Divider />
      <RenderTool
        converters={[converter]}
        defaultValue={defaultValue}
      />
    </>
  );
}
