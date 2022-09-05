import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { JavaScriptFormatter, JavaScriptFormatterOptions } from '@tools/formatters/javascript';
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
        converters={[JavaScriptFormatter]}
        defaultValue={defaultValue}
        lang1="javascript"
        lang2="javascript"
        options={JavaScriptFormatterOptions}
      />
    </>
  );
}
