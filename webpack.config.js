const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const SentryCliPlugin = require('@sentry/webpack-plugin');

const faviconConfig = require('./favicon.json');

const {
  WEBPACK_ENV,
  APP_ENV,
  SENTRY_AUTH_TOKEN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  GITHUB_SHA, // the commit SHA that triggered the workflow
  GITHUB_REF, // the branch or tag ref that triggered the workflow
} = process.env;

const BUILD_DIR = path.join(__dirname, 'build');
const PUBLIC_CONFIGURATION = require(`./conf/${APP_ENV}/public`);

const fixSentryRelease = (ref) => {
  try {
    return ref.split('/').pop();
  } catch (e) {
    return ref;
  }
};

module.exports = {
  mode: WEBPACK_ENV === 'production' ? 'production' : 'development',
  watch: WEBPACK_ENV === 'production' ? false : true,
  devtool: WEBPACK_ENV === 'production' ? 'source-map' : 'cheap-eval-source-map',
  stats: 'errors-only',
  node: {
    fs: 'empty',
  },
  devServer: {
    host: '0.0.0.0',
    port: 9992,
    historyApiFallback: true,
    disableHostCheck: true,
    index: path.resolve(BUILD_DIR, 'index.html'),
    contentBase: BUILD_DIR,
  },
  entry: {
    'main': './app.tsx',
    'sentry': './integrations/Sentry.ts',
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  output: {
    globalObject: 'self',
    filename: '[name].bundle.js',
    path: path.resolve(BUILD_DIR, 'static'),
    publicPath: '/static/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'html', 'base.html'),
      filename: '../index.html',
      chunks: ['sentry', 'main'],
      alwaysWriteToDisk: true,
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'images', 'sudo.png'),
      publicPath: '/static/',
      cache: true,
      inject: true,
      favicons: faviconConfig,
    }),
    new DefinePlugin({
      'APP_ENV': JSON.stringify(APP_ENV),
      'CONFIG': JSON.stringify(PUBLIC_CONFIGURATION),
      'GITHUB_SHA': JSON.stringify(GITHUB_SHA),
      'GITHUB_REF': JSON.stringify(fixSentryRelease(GITHUB_REF)),
    }),
    new HtmlWebpackHarddiskPlugin(),
    WEBPACK_ENV === 'production' &&
    SENTRY_AUTH_TOKEN &&
    SENTRY_ORG &&
    SENTRY_PROJECT &&
    new SentryCliPlugin({
      include: './public',
      release: fixSentryRelease(GITHUB_REF) || GITHUB_SHA,
    }),
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: [
        'json',
        'javascript',
        'typescript',
        'css',
        'scss',
        'xml',
        'sql',
        'markdown',
      ],
    })
  ].filter(i => i),
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './node_modules/monaco-editor'),
          path.resolve(__dirname, 'styles'),
        ],
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          'babel-loader',
          'markdown-to-react-loader',
        ],
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-pro/svgs/'),
          path.resolve(__dirname, '../node_modules/@fortawesome/fontawesome-pro/svgs/'),
        ],
        use: [
          {
            loader: '@svgr/webpack',
          }
        ],
      },
      {
        test: /\.(eot|woff|ttf|svg|png|jpg|gif)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-pro/svgs/'),
          path.resolve(__dirname, '../node_modules/@fortawesome/fontawesome-pro/svgs/'),
        ],
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
};
