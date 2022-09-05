import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
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
        converters={[MarkdownToReactCompiler, JavaScriptFormatter]}
        defaultValue={defaultValue}
        lang1="markdown"
        lang2="javascript"
        options={{ ...MarkdownToReactCompilerOptions, ...JavaScriptFormatterOptions }}
      />
    </>
  );
}
