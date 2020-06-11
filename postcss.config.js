const precss = require('precss');
const postcssMixins = require('postcss-mixins');
const postcssImport = require('postcss-import');
const postcssAssets = require('postcss-assets');
const postcssCssVars = require('postcss-css-variables');
const autoprefixer = require('autoprefixer');

module.exports = () => ({
  plugins: [
    postcssImport({ path: ['src/styles'] }),
    postcssAssets({ loadPaths: ['static'], relative: true }),
    precss('./src/*.css'),
    postcssMixins(),
    postcssCssVars(),
    autoprefixer()
  ]
});
