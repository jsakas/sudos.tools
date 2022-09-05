import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import promisify from '@utils/promisify';
import React from 'react';

const defaultValue = 'Thanks for using our devtool';

const seo = {
  title: 'Base64 Encode',
  description: 'Use this tool to take a string and encode it using the base64 algorithm.',
};

const converter = promisify((input : string) => btoa(input));

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