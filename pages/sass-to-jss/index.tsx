import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { JssCompiler } from '@tools/compilers/jss';
import { SassCompiler } from '@tools/compilers/sass';
import { JsonFormatter, JsonFormatterOptions } from '@tools/formatters/json';
import React, {  } from 'react';

const defaultValue = `
$primary: black;
$secondary: rgba($primary, .5);

.my-class {
  color: $secondary;

  body.loaded & {
    color: $primary;
  }
}
`;

const seo = {
  title: 'Sass to React JSS',
  description: 'Use this tool to compile Sass to React JSS quickly in the brower.',
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
        converters={[SassCompiler, JssCompiler, JsonFormatter]}
        defaultValue={defaultValue}
        lang1="scss"
        lang2="json"
        options={JsonFormatterOptions}
      />
    </>
  );
}
