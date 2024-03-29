import RenderTool from '@components/RenderOptions/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { SassCompiler, SassCompilerOptions } from '@src/tools/compilers/sass';
import React, {  } from 'react';


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
        converters={[SassCompiler]}
        defaultValue={defaultValue}
        lang1="scss"
        lang2="css"
        options={SassCompilerOptions}
      />
    </>
  );
}
