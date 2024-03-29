import RenderTool from '@components/RenderOptions/RenderTool';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { JsonFormatter, JsonFormatterOptions } from '@src/tools/formatters/json';
import React, {  } from 'react';

const defaultValue = '{"declaration":{"attributes":{"version":"1.0","encoding":"UTF-8"}},"elements":[{"type":"element","name":"urlset","attributes":{"xmlns":"http://www.sitemaps.org/schemas/sitemap/0.9"},"elements":[{"type":"element","name":"url","elements":[{"type":"element","name":"loc","elements":[{"type":"text","text":"http://www.example.com/"}]},{"type":"element","name":"lastmod","elements":[{"type":"text","text":"2005-01-01"}]},{"type":"element","name":"changefreq","elements":[{"type":"text","text":"monthly"}]},{"type":"element","name":"priority","elements":[{"type":"text","text":"0.8"}]}]}]}]}';

const seo = {
  title: 'JSON Formatter',
  description: 'Use this tool to format and beautify JSON.',
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
        converters={[JsonFormatter]}
        defaultValue={defaultValue}
        lang1="json"
        lang2="json"
        options={JsonFormatterOptions}
      />
    </>
  );
}
