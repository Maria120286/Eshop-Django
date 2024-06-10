var proxy = require('./proxy'),
  userAgent = require('./useragent');

module.exports = function() {
  var options = {
    rejectUnauthorized: false,
    timeout: 60000,
    headers: {
      'User-Agent': userAgent(),
    },
    encoding: null,
  };

  var proxyConfig = proxy();
  if (proxyConfig) {
    options.proxy = proxyConfig;
  }

  return options;
};
