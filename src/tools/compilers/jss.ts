import { indent } from '@src/tools/options/indent';
import cssToJss from 'jss-cli/lib/cssToJss';

export const JssCompilerOptions : ConfigurationOptions = {
  indent,
};

export const JssCompiler : Pipeable = (input) => new Promise((resolve, reject) => {
  if (!input) {
    resolve('');
  }

  try {
    const jss = cssToJss({
      code: input
    });

    resolve(JSON.stringify(jss));
  } catch (e) {
    reject(e);
  }
});
