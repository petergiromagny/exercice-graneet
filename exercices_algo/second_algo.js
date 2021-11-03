const convertIntToBinary = (number) => {
  let binary = '';

  while (number !== 0) {
    binary = `${number % 2}${binary}`;
    number = Math.floor(number / 2);
  }

  return binary;
};

const zeroLength = (number) => {
  if (number <= 0 || number >= Math.pow(2, 32) || typeof number !== 'number') {
    return 'Choisir un nombre entier positif';
  }

  const binaryResult = convertIntToBinary(number);

  const splitString = binaryResult.split('1');

  let stringLength = 0;

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > stringLength) {
      stringLength = splitString[i].length;
    }
  }

  return stringLength;
};

module.exports = {
  zeroLength: zeroLength,
  convertIntToBinary: convertIntToBinary,
};
