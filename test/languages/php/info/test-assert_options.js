XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var assert_options = require('/Users/kvz/code/phpjs/src/php/info/assert_options.js')

describe('php.info.assert_options.js', function () {
  it('should pass example 1', function (done) {
    assert_options('ASSERT_CALLBACK');
    var expected = null
    var result = assert_options('ASSERT_CALLBACK');
    expect(result).to.deep.equal(expected)
    done()
  })
})