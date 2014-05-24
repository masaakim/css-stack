
var fs = require('fs');
var test = require('colored-tape');
var stack = require('..');

var css = fs.readFileSync('test/fixture.css').toString();

test('list', function (t) {
  var result = stack.list(css);

  var expected = [
    '.z-5',
    '.z-2',
    '.z-4',
    '.z-4-1',
    '.z-4-6'
  ];

  t.same(result, expected);

  t.end();
});

test('level', function (t) {
  var result = stack.level(css);

  var expected = [5, 2, 4, 1, 6];

  t.same(result, expected);

  t.end();
});
