import { indent } from '@src/tools/options/indent';
import { quotes } from '@src/tools/options/quotes';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';

export const JavaScriptFormatterOptions : ConfigurationOptions = {
  quotes,
  indent,
};

export const JavaScriptFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  const converted = prettier.format(input, {
    parser: 'babel',
    plugins: [parserBabel],
    singleQuote: options.quotes.value === 'single',
    tabWidth: Number(options.indent.value),
  });

  resolve(converted);
});
