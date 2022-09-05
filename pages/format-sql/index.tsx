import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { SqlFormatter, SqlFormatterOptions } from '@tools/formatters/sql';
import React, {  } from 'react';

const defaultValue = 'select * from my_table where id = 1;';

const seo = {
  title: 'SQL Formatter',
  description: 'Use this tool to format and beautify SQL.',
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
        converters={[SqlFormatter]}
        defaultValue={defaultValue}
        lang1="sql"
        lang2="sql"
        options={SqlFormatterOptions}
      />
    </>
  );
}
