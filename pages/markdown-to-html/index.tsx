import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
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
        converters={[MarkdownCompiler, HtmlFormatter]}
        defaultValue={defaultValue}
        lang1="markdown"
        lang2="html"
        options={{ ...MarkdownCompilerOptions, ...HtmlFormatterOptions }}
      />
    </>
  );
}