export default [
  {
    title: 'Home',
    path: '/',
    page: require('@pages/index'),
  },
  {
    title: 'CSS to JSS',
    path: '/css-to-jss',
    menus: ['tools'],
    page: require('@pages/css-to-jss'),
  },
  {
    title: 'Markdown to HTML',
    path: '/markdown-to-html',
    menus: ['tools'],
    page: require('@pages/markdown-to-html'),
  },
  {
    title: 'Markdown to React',
    path: '/markdown-to-react',
    menus: ['tools'],
    page: require('@pages/markdown-to-react'),
  },
  {
    title: 'SQL Formatter',
    path: '/format-sql',
    menus: ['tools'],
    page: require('@pages/format-sql'),
  },
  {
    title: 'XML Formatter',
    path: '/format-xml',
    menus: ['tools'],
    page: require('@pages/format-xml'),
  },
  {
    title: 'Base64 Encode',
    path: '/base64-encode',
    menus: ['tools'],
    page: require('@pages/base64-encode'),
  },
  {
    title: 'Base64 Decode',
    path: '/base64-decode',
    menus: ['tools'],
    page: require('@pages/base64-decode'),
  },
  {
    title: 'About',
    path: '/about',
    menus: ['links'],
    page: require('@pages/about'),
  },
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    menus: ['links'],
    page: require('@pages/privacy-policy'),
  },
  {
    title: 'Cookie Policy',
    path: '/cookie-policy',
    menus: ['links'],
    page: require('@pages/cookie-policy'),
  },
];
