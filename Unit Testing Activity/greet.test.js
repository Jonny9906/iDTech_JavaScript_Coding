var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

test('outputs the correct string', () => {
  expect(greet("Jonathan")).toBe("Hello, Jonathan");
});