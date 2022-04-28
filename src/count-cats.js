const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = matrix.flat(Infinity);
  let counter = 0;
  let no = 0;
  if (arr.length == 0) {
    return 0;
  }
  else {
  for (i = -1; i < arr.length; i++) {
    if (arr[i] ===  "^^" ) {
      counter++;
    }
    else {
      no++;
    }
  }
  return counter;

  }

}

module.exports = {
  countCats
};
