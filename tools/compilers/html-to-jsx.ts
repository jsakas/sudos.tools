import HTMLtoJSX from 'htmltojsx';

// @ts-ignore;
window.IN_BROWSER = true;

export const HtmlToJsxCompilerOptions : ConfigurationOptions = {};

export const HtmlToJsxCompiler : Pipeable = (input) => new Promise((resolve, reject) => {
  try {
    const cls = new HTMLtoJSX({
      createClass: false,
    });

    const converted = cls.convert(input);

    resolve(converted);
  } catch (e) {
    reject(e);
  }
});
