const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const { SitemapStream, streamToPromise } = require('sitemap')

console.log('Start building sitemap..')

const linksStream = fg.stream(['personal-website/posts/*.md'])
  .map((filePath) => ({ url: filePath.replace('posts/', '').replace(/\.md$/, '.html') }))

const sitemapStream = new SitemapStream({ hostname: 'https://xuhang.link' })

// Return a promise that resolves with your XML string
streamToPromise(linksStream.pipe(sitemapStream)).then((sitemap) => {
  fs.writeFileSync(
    path.resolve(__dirname, '../sitemap.xml'),
    sitemap,
  )
})