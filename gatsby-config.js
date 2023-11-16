const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'blog',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: { feeds: [] },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-ramda`,
    `gatsby-plugin-emotion`,
  ],
};
