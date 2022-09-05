import { indent } from '@tools/options/indent';

export const JsonFormatterOptions : ConfigurationOptions = {
  indent,
};

export const JsonFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  resolve(JSON.stringify(JSON.parse(input), null, Number(options.indent.value)));
});
