const E = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
];

const values = [];

const moveOn = (E, pathValue) => {
  /**
   * Sum of path taken until now
   * Start at 0
   */
  pathValue += E[0][0];

  // On each row
  if (E.length > 1) {
    const removeRow = [...E];

    console.log('Row: ', removeRow);

    removeRow.shift();

    moveOn(removeRow, pathValue);
  }

  // On each columns
  if (E[0].length > 1) {
    const removeColumn = [...E];

    console.log('Column: ', removeColumn);

    for (let i = 0; i < E.length; i++) {
      removeColumn[i].shift();
    }

    moveOn(removeColumn, pathValue);
  }

  values.push(pathValue);
  return pathValue;
};

module.exports = {
  moveOn: moveOn,
};
