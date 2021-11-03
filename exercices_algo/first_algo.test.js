const { howMuch } = require('./first_algo');

test('Should be 6', () => {
  const list = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];
  const amount = 626.5;

  const amountResult = howMuch(list, amount);
  expect(amountResult).toBe(6);
});

test('Should be a positive number', () => {
  const amount = 626.5;

  expect(amount).toBeGreaterThan(0);
});

test('Should be an array of positive number', () => {
  const list = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  list.forEach((values) => {
    expect(values).toBeGreaterThan(0);
  });
});
