const path = require('path');
const { DefinePlugin, NormalModuleReplacementPlugin } = require('webpack');
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
  devtool: WEBPACK_ENV === 'production' ? 'source-map' : 'eval',
  stats: 'errors-only',
  devServer: {
    port: 9992,
    historyApiFallback: true,
    static: {
      serveIndex: true,
      directory: BUILD_DIR,
    }
  },
  entry: {
    'main': './src/App.tsx',
    'sentry': './src/integrations/Sentry.ts',
  },
  output: {
    globalObject: 'self',
    filename: '[name].bundle.js',
    path: path.resolve(BUILD_DIR, 'static'),
    publicPath: '/static/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'html', 'base.html'),
      filename: '../index.html',
      chunks: ['sentry', 'main'],
      alwaysWriteToDisk: true,
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src', 'images', 'sudo.png'),
      publicPath: '/static/',
      cache: true,
      inject: true,
      favicons: faviconConfig,
    }),
    new DefinePlugin({
      'IN_BROWSER': JSON.stringify(true), // for htmltojsx library
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
        // 'abap',
        // 'aes',
        // 'apex',
        // 'azcli',
        // 'bat',
        // 'bicep',
        // 'c',
        // 'cameligo',
        // 'clojure',
        // 'coffeescript',
        // 'cpp',
        // 'csharp',
        // 'csp',
        'css',
        // 'dart',
        'dockerfile',
        // 'ecl',
        // 'elixir',
        // 'flow9',
        // 'fsharp',
        // 'go',
        'graphql',
        // 'handlebars',
        // 'hcl',
        'html',
        // 'ini',
        // 'java',
        'javascript',
        'json',
        // 'julia',
        // 'kotlin',
        // 'less',
        // 'lexon',
        // 'liquid',
        // 'lua',
        // 'm3',
        'markdown',
        // 'mips',
        // 'msdax',
        'mysql',
        // 'objective-c',
        // 'pascal',
        // 'pascaligo',
        // 'perl',
        // 'pgsql',
        // 'php',
        // 'pla',
        // 'plaintext',
        // 'postiats',
        // 'powerquery',
        // 'powershell',
        // 'proto',
        // 'pug',
        'python',
        // 'qsharp',
        // 'r',
        // 'razor',
        // 'redis',
        // 'redshift',
        // 'restructuredtext',
        'ruby',
        // 'rust',
        // 'sb',
        // 'scala',
        // 'scheme',
        'scss',
        'shell',
        // 'sol',
        // 'sparql',
        'sql',
        // 'st',
        // 'swift',
        // 'systemverilog',
        // 'tcl',
        // 'twig',
        'typescript',
        // 'vb',
        // 'verilog',
        'xml',
        'yaml'
      ],
    }),
    new NormalModuleReplacementPlugin(
      /cssfmt\/lib\/config.js/,
      path.resolve(__dirname, 'src/overrides/cssfmt/config.js')
    )
  ].filter(i => i),
  resolve: {
    fallback: {
      buffer: false,
      fs: false,
      path: false,
    },
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
          path.resolve(__dirname, 'src', 'styles'),
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
        type: 'asset/resource'
      },
    ]
  },
};
