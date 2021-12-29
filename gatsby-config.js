module.exports = {
  siteMetadata: {
    title: 'george-webapp',
    author: 'George Savchenko',
    description: 'Get your George Savchenko digest here!',
    siteUrl: 'http://georgesavchenko.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: false, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: false, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-plugin-typescript-checker',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve:`gatsby-plugin-manifest`,
      options: { icons: [] }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to module you created in step 1
        pathToCreateStoreModule: './src/app/store',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
    {
      resolve: "@danbruegge/gatsby-plugin-stylelint",
      options: {
        files: ["**/*.{ts,tsx}"],
        configFile: './stylelint.config.js'
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-ramda`,
    `gatsby-plugin-postcss`
  ],
}
    