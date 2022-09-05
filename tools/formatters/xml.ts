import { indent } from '@tools/options/indent';
import xmlFormat from 'xml-formatter';

export const XmlFormatterOptions : ConfigurationOptions = {
  indent,
};

export const XmlFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  const converted = xmlFormat(input, {
    indentation: ' '.repeat(Number(options.indent.value)),
    collapseContent: true,
  });

  resolve(converted);
});
