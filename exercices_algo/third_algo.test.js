const { moveOn } = require('./third_algo');

test('Should be a positive result', () => {
  const E = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 0, 9],
  ];

  const moveOnResult = moveOn(E, 0);
  expect(moveOnResult).toBeGreaterThan(0);
});
