import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { MarkdownToReactCompiler, MarkdownToReactCompilerOptions } from '@tools/compilers/markdown-to-react';
import { JavaScriptFormatter, JavaScriptFormatterOptions } from '@tools/formatters/javascript';
import React, {  } from 'react';

const defaultValue = `# Hello, World

This is a markdown document

- List item 1
- List item 2
- List item 3
`;

const seo = {
  title: 'Markdown to React',
  description: 'Use this tool to convert markdown to React JSX.',
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
        converters={[MarkdownToReactCompiler, JavaScriptFormatter]}
        defaultValue={defaultValue}
        lang1="markdown"
        lang2="javascript"
        options={{ ...MarkdownToReactCompilerOptions, ...JavaScriptFormatterOptions }}
      />
    </>
  );
}
