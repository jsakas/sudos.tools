import fs from 'fs';
import format from 'xml-formatter';
import xmlJs from 'xml-js';

import routes from './routes';
import seo from './seo';

const main = async () => {
  const urlset = routes.filter(r => r.sitemap).map(route => {
    return {
      'type': 'element',
      'name': 'url',
      'elements': [
        {
          'type': 'element',
          'name': 'loc',
          'elements': [
            {
              'type': 'text',
              'text': new URL(route.path, seo.url).href
            }
          ]
        },
      ]
    };
  });

  const json = {
    'declaration': {
      'attributes': {
        'version': '1.0',
        'encoding': 'UTF-8'
      }
    },
    'elements': [
      {
        'type': 'element',
        'name': 'urlset',
        'attributes': {
          'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9'
        },
        'elements': urlset,
      }
    ]
  };

  const xml = xmlJs.json2xml(JSON.stringify(json));

  const formatted = format(xml, {
    indentation: '  ',
    collapseContent: true,
  });

  fs.writeFileSync('./build/sitemap.xml', formatted);
};

main().catch(console.error);
