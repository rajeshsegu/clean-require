'use strict';

function clearCache() {
  Object.keys(require.cache)
    .forEach(function e(file) {
      delete require.cache[file];
    });
}

module.exports = clearCache;
