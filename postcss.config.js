const precss = require('precss');

module.exports = () => ({
  plugins: [
    precss('./src/*.css')
  ],
})