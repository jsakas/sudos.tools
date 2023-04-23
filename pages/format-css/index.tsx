import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CssFormatter, CssFormatterOptions } from '@tools/formatters/css';
import React, {  } from 'react';

const defaultValue = `.my-class {
  color: rgba(0, 0, 0, 0.5); }
  body.loaded .my-class {
    color: black; }
`;

const seo = {
  title: 'CSS Formatter',
  description: 'Use this tool to format and beautify CSS.',
};

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
        converters={[CssFormatter]}
        defaultValue={defaultValue}
        lang1="css"
        lang2="css"
        options={CssFormatterOptions}
      />
    </>
  );
}
