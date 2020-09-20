export default [
  {
    title: 'Free online development tools',
    path: '/',
    page: require('@pages/index'),
  },
  {
    title: 'CSS to JSS',
    path: '/css-to-jss',
    page: require('@pages/css-to-jss'),
    menus: ['tools'],
  },
  {
    title: 'Markdown to HTML',
    path: '/markdown-to-html',
    page: require('@pages/markdown-to-html'),
    menus: ['tools'],
  },
  {
    title: 'Markdown to React',
    path: '/markdown-to-react',
    page: require('@pages/markdown-to-react'),
    menus: ['tools'],
  },
  {
    title: 'SQL Formatter',
    path: '/format-sql',
    page: require('@pages/format-sql'),
    menus: ['tools'],
  },
  {
    title: 'XML Formatter',
    path: '/format-xml',
    page: require('@pages/format-xml'),
    menus: ['tools'],
  },
  {
    title: 'Base64 Encode',
    path: '/base64-encode',
    page: require('@pages/base64-encode'),
    menus: ['tools'],
  },
  {
    title: 'Base64 Decode',
    path: '/base64-decode',
    page: require('@pages/base64-decode'),
    menus: ['tools'],
  },
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    page: require('@pages/privacy-policy'),
    menus: ['links'],
  },
  {
    title: 'Cookie Policy',
    path: '/cookie-policy',
    page: require('@pages/cookie-policy'),
    menus: ['links'],
  },
  {
    title: 'Not Found',
    path: '**',
    page: require('@pages/404'),
  }
];
