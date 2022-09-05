import { indent } from '@tools/options/indent';
import { quotes } from '@tools/options/quotes';
import prettier from 'prettier';
import parserTypescript from 'prettier/parser-typescript';

export const TypeScriptFormatterOptions : ConfigurationOptions = {
  quotes,
  indent,
};

export const TypeScriptFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  const converted = prettier.format(input, {
    parser: 'typescript',
    plugins: [parserTypescript],
    singleQuote: options.quotes.value === 'single',
    tabWidth: Number(options.indent.value),
  });

  resolve(converted);
});
