import markdownToReact from 'markdown-to-react-loader/lib/markdown-to-react-loader';

export const MarkdownToReactCompilerOptions : ConfigurationOptions = {};

export const MarkdownToReactCompiler : Pipeable = (input) => new Promise((resolve, reject) => {
  try {
    const converted = markdownToReact(input);

    resolve(converted);
  } catch (e) {
    reject(e);
  }
});
