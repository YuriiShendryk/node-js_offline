const path = require('path');

// normalization
console.log("normalization: ", path.normalize('/foo/bar//baz/asdf/quux/..'));

// join
console.log("normalization: ", path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// resolve
console.log("normalization: ", path.resolve('/foo/bar', '/tmp/file/'));

// extName
path.extname('index.html');
path.extname('index.coffee.md');





