'use strict';

var cleanRequire = require('../');
var scotchTape = require('scotch-tape');

var test = scotchTape();

test('clean-require', function run(it) {
  it('should export correctly', function should(t) {
    t.ok(typeof cleanRequire === 'function', 'exported as expected');
    t.end();
  });

  it('should require a new copy', function should(t) {
    var a = cleanRequire('assign');
    var b = cleanRequire('assign');
    t.notEqual(a, b);
    t.end();
  });

  it('should require the same copy by default', function should(t) {
    var a = require('assign');
    var b = require('assign');
    t.equal(a, b);
    t.end();
  });
});
