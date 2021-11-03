const { howMuch } = require('./first_algo');
const { zeroLength } = require('./second_algo');
const { moveOn } = require('./third_algo');

console.log('/*********************/');
console.log('/******* ALGO ********/');
console.log('/*********************/');
console.log('');

/**
 * Algorithme : Rends l'argent !
 */
const list = [500, 200, 100, 50, 20, 10, 5];
const amount = 25;

const resultFirst = howMuch(list, amount);

console.log('Exercice 1: ');
console.log('P = ', resultFirst);
console.log('---------------------');

/**
 * Algorithme : Des 1 et des 0 à devenir fou !
 */
const number = 296;

const resultSecond = zeroLength(number);

console.log('Exercice 2: ');
console.log('L = ', resultSecond);
console.log('---------------------');

/**
 * Algorithme : Pic pic pic !
 */

const E = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
];

const resultThird = moveOn(E, 0);

console.log('Exercice 3: ');
console.log('M = ', resultThird.result);
console.log('Chemin: ', resultThird.pathDone);

console.log('');
console.log('/*********************/');
