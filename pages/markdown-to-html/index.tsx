import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { MarkdownCompiler, MarkdownCompilerOptions } from '@tools/compilers/markdown';
import { HtmlFormatter, HtmlFormatterOptions } from '@tools/formatters/html';
import React, {  } from 'react';

const defaultValue = `# Hello, World

This is a markdown document

- List item 1
- List item 2
- List item 3
`;

const seo = {
  title: 'Markdown to HTML',
  description: 'Use this tool to convert markdown to HTML.',
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
        converters={[MarkdownCompiler, HtmlFormatter]}
        defaultValue={defaultValue}
        lang1="markdown"
        lang2="html"
        options={{ ...MarkdownCompilerOptions, ...HtmlFormatterOptions }}
      />
    </>
  );
}