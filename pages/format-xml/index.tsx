import RenderTool from '@components/render-options/RenderTool';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { XmlFormatter, XmlFormatterOptions } from '@tools/formatters/xml';
import React, {  } from 'react';

const defaultValue = `<root>
<content><p xml:space="preserve">This is <b>some</b> content.</p>


</content>
</root>`;

const seo = {
  title: 'XML Formatter',
  description: 'Use this tool to format and beautify XML.',
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
        converters={[XmlFormatter]}
        defaultValue={defaultValue}
        lang1="xml"
        lang2="xml"
        options={XmlFormatterOptions}
      />
    </>
  );
}