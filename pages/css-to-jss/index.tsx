import RenderTool from '@components/render-options/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { JssCompiler, JssCompilerOptions } from '@tools/compilers/jss';
import { JsonFormatter } from '@tools/formatters/json';
import React, {  } from 'react';

const defaultValue = `.example {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100px 100px 100px;
  border-color: transparent transparent #007bff transparent;
}`;

const seo = {
  title: 'CSS to React JSS',
  description: 'Use this tool to convert CSS styles to new React JSS syntax.',
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
        converters={[JssCompiler, JsonFormatter]}
        defaultValue={defaultValue}
        lang1="scss"
        lang2="json"
        options={JssCompilerOptions}
      />
    </>
  );
}