exports.howMuch = (list, amount) => {
  let totalCash = 0;

  for (i = 0; i < list.length; i++) {
    while (amount - list[i] >= 0) {
      if (amount - list[i] >= 0) {
        amount -= list[i];
        totalCash++;
      }
    }
  }

  if (amount !== 0) {
    totalCash = -1;
  }

  return totalCash;
};
