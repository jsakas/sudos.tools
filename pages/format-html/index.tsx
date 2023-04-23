import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { HtmlFormatter, HtmlFormatterOptions } from '@tools/formatters/html';
import React, {  } from 'react';

const defaultValue = '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>';

const seo = {
  title: 'HTML Formatter',
  description: 'Use this tool to format and beautify HTML.',
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
        converters={[HtmlFormatter]}
        defaultValue={defaultValue}
        lang1="html"
        lang2="html"
        options={HtmlFormatterOptions}
      />
    </>
  );
}