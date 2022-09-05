import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
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
        converters={[CssFormatter]}
        defaultValue={defaultValue}
        lang1="css"
        lang2="css"
        options={CssFormatterOptions}
      />
    </>
  );
}
