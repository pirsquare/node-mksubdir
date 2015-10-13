var fs = require('fs');
var path = require('path');


// Tries to create non-recursive directory. Will ignore already exist error but will fail if you try to
// create sub-directory when root-directory doesn't exist. For example: Creating "/foo/bar"
// will fail if "/foo" directory is not created.
function mkdirNonRecursive(p) {
  try {
    fs.mkdirSync(p);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
}


function mksubdir(p) {
  var defaultRoot = "/";
  var pathSplit = path.resolve(path.normalize(p)).split(path.sep);
  var pathToMk;

  // Dirty hack: Set defaultRoot if rootDir is empty.
  // This is needed so that you will always run `mkdirNonRecursive` with absolute path
  if (pathSplit[0] === "") {
    pathSplit[0] = defaultRoot;
  }

  // i=1 to avoid creating root directory since you probably won't have enough permission
  for (var i = 1; i < pathSplit.length; i++) {

    // need use apply if you want unpack arrays to arguments: myfunc([1, 2, 3]) to myfunc(1, 2, 3)
    pathToMk = path.join.apply(this, pathSplit.slice(0, i + 1));
    mkdirNonRecursive(pathToMk);
  }
}


module.exports = mksubdir;