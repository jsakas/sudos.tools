
import { comments } from '@tools/options/comments';
import { indent } from '@tools/options/indent';
import { sassStyle } from '@tools/options/sassStyle';
import Sass from 'sass.js/dist/sass.js';

// @ts-ignore
import sassWorker from '!!file-loader!sass.js/dist/sass.worker.js';

const sass = new Sass(sassWorker);

export const SassCompilerOptions : ConfigurationOptions = {
  sassStyle,
  comments,
  indent,
};

export const SassCompiler : Pipeable = (input, options = {}) => new Promise((resolve, reject) => {
  const _options = Object.assign(SassCompilerOptions, options);

  if (!input) {
    resolve('');
  }

  sass.compile(
    input,
    {
      style: Sass.style[_options.sassStyle.value],
      indent: ' '.repeat(Number(_options.indent.value)),
      comments: _options.comments.value,
    },
    function (converted) {
      if (converted.status === 1) {
        reject(new Error(converted.message));
      }

      resolve(converted.text);
    });
});
