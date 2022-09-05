import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { HtmlFormatter, HtmlFormatterOptions } from '@tools/formatters/html';
import React, {  } from 'react';

const defaultValue = '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>';

const seo = {
  title: 'HTML Formatter',
  description: 'Use this tool to format and beautify HTML.',
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
        converters={[HtmlFormatter]}
        defaultValue={defaultValue}
        lang1="html"
        lang2="html"
        options={HtmlFormatterOptions}
      />
    </>
  );
}