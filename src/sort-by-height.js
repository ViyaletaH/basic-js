const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

// function sortByHeight(arr) {
//   let i = 0;
//   let obj = {};
//   while (i < arr.length) {
//     if (arr[i] === -1) {
//       obj["-1"] = i;
//     }
//     else {
//       i++;
//     }
//   }
//   let sorted = arr.sort(function(a, b) {
//     return a - b;
//   });

//   Array.prototype.insert = function (index, item) {
//     this.splice(index, 0, item);
//   }

//   let ind = Object.values(obj);

//   console.log(ind);

//   for (j = 0; j < ind.length; j++) {
//     sorted.insert(ind[j], -1);
    
//   }

//   arr = sorted;

//   return arr;

// }

// sortByHeight();

module.exports = {
  sortByHeight
};
