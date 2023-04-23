import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import promisify from '@utils/promisify';
import React from 'react';

const defaultValue = 'Thanks for using our devtool';

const seo = {
  title: 'Base64 Encode',
  description: 'Use this tool to take a string and encode it using the base64 algorithm.',
};

const converter = promisify((input : string) => btoa(input));

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