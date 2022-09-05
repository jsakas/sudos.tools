import marked from 'marked';

export const MarkdownCompilerOptions : ConfigurationOptions = {};

export const MarkdownCompiler : Pipeable = (input) => new Promise((resolve, reject) => {
  try {
    const converted = marked(input);

    resolve(converted);
  } catch (e) {
    reject(e);
  }
});
