import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
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
        converters={[TypeScriptFormatter]}
        defaultValue={defaultValue}
        lang1="typescript"
        lang2="typescript"
        options={TypeScriptFormatterOptions}
      />
    </>
  );
}
