import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { TypeScriptFormatter, TypeScriptFormatterOptions } from '@tools/formatters/typescript';
import React, {  } from 'react';

const defaultValue = `
function say( word :string) {
 console.log(word)
  }

  say('Hello, World!')
   say("Thanks for using Sudo's Tools")

`;

const seo = {
  title: 'TypeScript Formatter',
  description: 'Use this tool to format and beautify TypeScript.',
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
        converters={[TypeScriptFormatter]}
        defaultValue={defaultValue}
        lang1="typescript"
        lang2="typescript"
        options={TypeScriptFormatterOptions}
      />
    </>
  );
}
