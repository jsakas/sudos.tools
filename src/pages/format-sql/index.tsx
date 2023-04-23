import RenderTool from '@components/RenderOptions/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { SqlFormatter, SqlFormatterOptions } from '@src/tools/formatters/sql';
import React, {  } from 'react';

const defaultValue = 'select * from my_table where id = 1;';

const seo = {
  title: 'SQL Formatter',
  description: 'Use this tool to format and beautify SQL.',
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
        converters={[SqlFormatter]}
        defaultValue={defaultValue}
        lang1="sql"
        lang2="sql"
        options={SqlFormatterOptions}
      />
    </>
  );
}
