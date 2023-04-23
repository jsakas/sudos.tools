import React from 'react';

import languages, { languageNameMap } from './src/languages';

export default [
  {
    title: 'Free online tools for developers',
    path: '/',
    page: () => import('@pages/index'),
    sitemap: true,
  },
  {
    title: 'ISO 8601 Duration Checker',
    path: '/iso-8601-duration-checker',
    page: () => import('@pages/iso-8601-duration-checker'),
    menus: ['misc'],
    sitemap: true,
  },
  {
    title: 'CSS to JSS',
    path: '/css-to-jss',
    page: () => import('@pages/css-to-jss'),
    menus: ['converters'],
    sitemap: true,
  },
  {
    title: 'Sass to CSS',
    path: '/sass-to-css',
    page: () => import('@pages/sass-to-css'),
    menus: ['converters'],
    sitemap: true,
  },
  {
    title: 'Sass to JSS',
    path: '/sass-to-jss',
    page: () => import('@pages/sass-to-jss'),
    menus: ['converters'],
    sitemap: true,
  },
  {
    title: 'Markdown to HTML',
    path: '/markdown-to-html',
    page: () => import('@pages/markdown-to-html'),
    menus: ['converters'],
    sitemap: true,
  },
  {
    title: 'Markdown to React',
    path: '/markdown-to-react',
    page: () => import('@pages/markdown-to-react'),
    menus: ['converters'],
    sitemap: true,
  },
  {
    title: 'SQL Formatter',
    path: '/format-sql',
    page: () => import('@pages/format-sql'),
    menus: ['formatters'],
    sitemap: true,
  },
  {
    title: 'JSON Formatter',
    path: '/format-json',
    page: () => import('@pages/format-json'),
    menus: ['formatters'],
    sitemap: true,
  },
  {
    title: 'JavaScript Formatter',
    path: '/format-javascript',
    page: () => import('@pages/format-javascript'),
    menus: ['formatters'],
    sitemap: true,
  },
  {
    title: 'TypeScript Formatter',
    path: '/format-typescript',
    page: () => import('@pages/format-typescript'),
    menus: ['formatters'],
    sitemap: true,
  },
  ...languages.map(language => ({
    title: `${languageNameMap[language]} Diff Tool`,
    path: `/${language}-diff`,
    page: () => import('@components/DiffPage/DiffPage')
      .then(module => {
        return {
          // @ts-ignore
          default: () => React.createElement(module.default, {
            language,
          }),
        };
      }),
    menus: ['diff'],
    sitemap: true,
  })),
  {
    title: 'XML Formatter',
    path: '/format-xml',
    page: () => import('@pages/format-xml'),
    menus: ['formatters'],
    sitemap: true,
  },
  {
    title: 'HTML Formatter',
    path: '/format-html',
    page: () => import('@pages/format-html'),
    menus: ['formatters'],
    sitemap: true,
  },
  {
    title: 'HTML to React JSX',
    path: '/html-to-react',
    page: () => import('@pages/html-to-react'),
    menus: ['converters'],
    sitemap: true,
  },
  {
    title: 'CSS Formatter',
    path: '/format-css',
    page: () => import('@pages/format-css'),
    menus: ['formatters'],
    sitemap: true,
  },
  {
    title: 'Base64 Encode',
    path: '/base64-encode',
    page: () => import('@pages/base64-encode'),
    menus: ['encoders'],
    sitemap: true,
  },
  {
    title: 'Base64 Decode',
    path: '/base64-decode',
    page: () => import('@pages/base64-decode'),
    menus: ['encoders'],
    sitemap: true,
  },
  {
    title: 'URL Encode',
    path: '/url-encode',
    page: () => import('@pages/url-encode'),
    menus: ['encoders'],
    sitemap: true,
  },
  {
    title: 'URL Decode',
    path: '/url-decode',
    page: () => import('@pages/url-decode'),
    menus: ['encoders'],
    sitemap: true,
  },
  {
    title: 'Privacy Notice',
    path: '/privacy-notice',
    page: () => import('@pages/privacy-notice'),
    menus: ['links'],
    sitemap: true,
  },
  {
    title: 'Cookie Policy',
    path: '/cookie-policy',
    page: () => import('@pages/cookie-policy'),
    menus: ['links'],
    sitemap: true,
  },
  {
    title: 'Not Found',
    path: '**',
    page: () => import('@pages/404'),
  }
];
