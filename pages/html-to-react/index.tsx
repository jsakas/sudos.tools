import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { HtmlToJsxCompiler, HtmlToJsxCompilerOptions } from '@tools/compilers/html-to-jsx';
import { JavaScriptFormatter, JavaScriptFormatterOptions } from '@tools/formatters/javascript';
import React, {  } from 'react';


const defaultValue = `<!DOCTYPE html>
<html>

<head>
    <title>Page Title</title>
</head>

<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>

</html>`;

const seo = {
  title: 'HTML to React',
  description: 'Use this tool to convert HTML to React JSX.',
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
        converters={[HtmlToJsxCompiler, JavaScriptFormatter]}
        defaultValue={defaultValue}
        lang1="html"
        lang2="javascript"
        options={{ ...HtmlToJsxCompilerOptions, ...JavaScriptFormatterOptions }}
      />
    </>
  );
}
