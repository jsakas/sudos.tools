import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
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
        converters={[SassCompiler, JssCompiler, JsonFormatter]}
        defaultValue={defaultValue}
        lang1="scss"
        lang2="json"
        options={JsonFormatterOptions}
      />
    </>
  );
}
