

var path = require('path'),
  rimraf = require('rimraf');

function prepublish() {
  var vendorPath = path.resolve(__dirname, '..', 'vendor');
  rimraf.sync(vendorPath);
}



prepublish();
