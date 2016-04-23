XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var min = require('/Users/kvz/code/phpjs/src/php/math/min.js')

describe('php.math.min.js', function () {
  it('should pass example 1', function (done) {
    min(1, 3, 5, 6, 7);
    var expected = 1
    var result = min(1, 3, 5, 6, 7);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    min([2, 4, 5]);
    var expected = 2
    var result = min([2, 4, 5]);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    min(0, 'hello');
    var expected = 0
    var result = min(0, 'hello');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    min('hello', 0);
    var expected = 'hello'
    var result = min('hello', 0);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    min(-1, 'hello');
    var expected = -1
    var result = min(-1, 'hello');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    min([2, 4, 8], [2, 5, 7]);
    var expected = [2, 4, 8]
    var result = min([2, 4, 8], [2, 5, 7]);
    expect(result).to.deep.equal(expected)
    done()
  })
})