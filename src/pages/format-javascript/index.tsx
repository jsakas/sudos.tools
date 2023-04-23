import RenderTool from '@components/RenderOptions/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { JavaScriptFormatter, JavaScriptFormatterOptions } from '@src/tools/formatters/javascript';
import React, {  } from 'react';

const defaultValue = `
function say( word) {
 console.log(word)
  }

  say('Hello, World!')
   say("Thanks for using Sudo's Tools")

`
;

const seo = {
  title: 'JavaScript Formatter',
  description: 'Use this tool to format and beautify JavaScript.',
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
        converters={[JavaScriptFormatter]}
        defaultValue={defaultValue}
        lang1="javascript"
        lang2="javascript"
        options={JavaScriptFormatterOptions}
      />
    </>
  );
}
