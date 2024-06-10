var pkg = require('../../package.json');

module.exports = function() {
  return [
    'node/', process.version, ' ',
    'node-sass-installer/', pkg.version
  ].join('');
};
