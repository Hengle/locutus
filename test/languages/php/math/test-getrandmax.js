XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var getrandmax = require('/Users/kvz/code/phpjs/src/php/math/getrandmax.js')

describe('php.math.getrandmax.js', function () {
  it('should pass example 1', function (done) {
    getrandmax();
    var expected = 2147483647
    var result = getrandmax();
    expect(result).to.deep.equal(expected)
    done()
  })
})