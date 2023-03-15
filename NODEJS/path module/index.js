const path = require("path");

const baseName = path.basename("NODEJS/path module/index.js");
console.log(baseName); // index.js

const dirName = path.dirname("NODEJS/path module/index.js");
console.log(dirName); //NODEJS/path module

const extName = path.extname("/foo/bar/baz/asdf/quux.html");
console.log(extName); //.html
