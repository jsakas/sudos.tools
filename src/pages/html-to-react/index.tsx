import RenderTool from '@components/RenderOptions/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { HtmlToJsxCompiler, HtmlToJsxCompilerOptions } from '@src/tools/compilers/html-to-jsx';
import { JavaScriptFormatter, JavaScriptFormatterOptions } from '@src/tools/formatters/javascript';
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
        converters={[HtmlToJsxCompiler, JavaScriptFormatter]}
        defaultValue={defaultValue}
        lang1="html"
        lang2="javascript"
        options={{ ...HtmlToJsxCompilerOptions, ...JavaScriptFormatterOptions }}
      />
    </>
  );
}
