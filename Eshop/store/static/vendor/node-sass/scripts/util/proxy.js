
module.exports = function() {
  return process.env.npm_config_https_proxy ||
    process.env.npm_config_proxy ||
    process.env.npm_config_http_proxy ||
    '';
};
