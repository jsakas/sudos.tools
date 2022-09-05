import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, {  } from 'react';
import { SassCompiler, SassCompilerOptions } from 'tools/compilers/sass';


const defaultValue = `$primary: black;
$secondary: rgba($primary, .5);

.my-class {
  color: $secondary;

  body.loaded & {
    color: $primary;
  }
}
`;

const seo = {
  title: 'Sass Compiler',
  description: 'Use this tool to compile sass quickly in the browser.',
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
        converters={[SassCompiler]}
        defaultValue={defaultValue}
        lang1="scss"
        lang2="css"
        options={SassCompilerOptions}
      />
    </>
  );
}
