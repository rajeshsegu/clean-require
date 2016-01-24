var assign = require('assign');
var clearCache =  require('./clear-cache');

function cleanRequire(module) {

  var file = require.resolve(module);

  var temp = assign({}, require.cache);
  clearCache();

  var freshModule = require(file);

  clearCache();
  assign(require.cache, temp);

  return freshModule;
}

module.exports = cleanRequire;
