var assert = require('assert')
  , index = require('../routes')
  , should = require('should')
  , zombie = require('zombie')
  ;

describe('front page', function() {
  it('should load', function () {
    var browser = new zombie();
    browser.visit("http://localhost:3000/", function () {
      assert.ok(browser.success);
      if (browser.error) {
        console.dir("errors reported:", browser.errors);
      }
    });
  });
  
  it('should have the page title Liatorp', function() {
    var browser = new zombie();
    browser.visit("http://localhost:3000/", function () {
      assert.equal(browser.text("title"), "Liatorp");      
      if (browser.error) {
        console.dir("errors reported:", browser.errors);
      }
    });
  });
});