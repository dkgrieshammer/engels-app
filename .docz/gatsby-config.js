const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Engels App',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Engels App',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/david/Documents/dev/Engelsjahr/engels-app',
          templates:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/node_modules/docz-core/dist/templates',
          docz: '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz',
          cache:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/.cache',
          app: '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/app',
          appPackageJson:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/package.json',
          appTsConfig:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/tsconfig.json',
          gatsbyConfig:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/gatsby-config.js',
          gatsbyBrowser:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/gatsby-browser.js',
          gatsbyNode:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/gatsby-node.js',
          gatsbySSR:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/gatsby-ssr.js',
          importsJs:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/app/imports.js',
          rootJs:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/app/root.jsx',
          indexJs:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/app/index.jsx',
          indexHtml:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/app/index.html',
          db:
            '/Users/david/Documents/dev/Engelsjahr/engels-app/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
