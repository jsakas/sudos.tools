const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const format = require('xml-formatter');
 
const main = async () => {
  await sitemap({
    baseUrl: 'https://sudos.tools',
    pagesDirectory: __dirname + '/.next/server/pages',
    targetDirectory: 'public/',
    ignoredExtensions: ['js', 'map'],
    ignoredPaths: ['[fallback]'],
  });
      
  const xml = fs.readFileSync('./public/sitemap.xml', {
    encoding: 'utf-8',
  });

  const formatted = format(xml, {
    collapseContent: true,
  });

  fs.writeFileSync('./public/sitemap.xml', formatted);    
};

main().catch(console.error);
