/*eslint no-console:0 */
require('core-js/fn/object/assign');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');
var hostname = require('./hostname');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, hostname, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at '+hostname+':' + config.port);
  console.log('Opening your system browser...');
  open('http://'+hostname+':' + config.port + '/webpack-dev-server/');
});
