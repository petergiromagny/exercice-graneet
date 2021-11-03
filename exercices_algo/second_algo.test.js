const { zeroLength, convertIntToBinary } = require('./second_algo');

test('Should be 6', () => {
  const number = 123456;

  const lengthResult = zeroLength(number);
  expect(lengthResult).toBe(6);
});

test('Should be equal or greater than 0', () => {
  const number = 65535;

  const lengthResult = zeroLength(number);
  expect(lengthResult).toBeGreaterThanOrEqual(0);
});

test('Should be a string', () => {
  const number = 296;

  const convertIntResult = convertIntToBinary(number);
  expect(convertIntResult).toBe('100101000');
});
