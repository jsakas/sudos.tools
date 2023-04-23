import { uppercase } from '@src/tools/options/uppercase';
import sqlFormatter from 'sql-formatter-plus';

export const SqlFormatterOptions : ConfigurationOptions = {
  uppercase,
};

export const SqlFormatter : Pipeable = (input, options) => new Promise((resolve) => {
  const formatted = sqlFormatter.format(input, {
    language: 'n1ql',
    uppercase: options.uppercase.value,
    linesBetweenQueries: 1
  });

  resolve(formatted);
});
