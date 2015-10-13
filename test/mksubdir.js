var fs = require('fs');
var path = require('path');
var assert = require("assert");
var mksubdir = require('../');


function randomString() {
  var strVal = "";
  for (var i = 0; i < 5; i++) {
    strVal += Math.floor((Math.random() * 9) + 1).toString();
  }

  return strVal;
}


function dirExists(dirPath) {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    return false;
  }
}


describe('Test mksubdir', function() {

  describe('Main function', function() {
    it('should make directories recursively', function() {
      var dirRoot = randomString();
      while (dirExists(dirRoot)) {
        dirRoot = randomString();
      }

      var dirPath = path.join(dirRoot, "1", "2", "3");

      // assert created
      assert.equal(dirExists(dirRoot), false);
      assert.equal(dirExists(dirPath), false);
      mksubdir(dirPath);
      assert.equal(dirExists(dirRoot), true);
      assert.equal(dirExists(dirPath), true);

      // remove directories
      fs.rmdirSync(dirPath);
      fs.rmdirSync(path.join(dirRoot, "1", "2"));
      fs.rmdirSync(path.join(dirRoot, "1"));
      fs.rmdirSync(dirRoot);
    });
  });
});