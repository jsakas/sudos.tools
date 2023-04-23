import { indent } from '@src/tools/options/indent';
import { html } from 'js-beautify';

export const HtmlFormatterOptions : ConfigurationOptions = {
  indent,
};

export const HtmlFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  const converted = html(input, {
    indent_size: Number(options.indent.value)
  });

  resolve(converted);
});
