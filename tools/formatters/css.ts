import { indent } from '@tools/options/indent';
import prettier from 'prettier';
import parserCss from 'prettier/parser-postcss';

export const CssFormatterOptions : ConfigurationOptions = {
  indent,
};

export const CssFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  const converted = prettier.format(input, { 
    parser: 'css',
    plugins: [parserCss],
    tabWidth: Number(options.indent.value)
  });

  resolve(converted);
});
