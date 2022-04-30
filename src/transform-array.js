const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(baseArr) {
  let obj = {};
  let counter = 0;
  if (typeof baseArr == 'undefined' || baseArr === null || baseArr === false || typeof baseArr == 'number' || (typeof baseArr == 'object' && Array.isArray(baseArr) == false)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  const arr = Array.from(baseArr);
  if (Array.isArray(baseArr)) {
    if (baseArr.length == 0) {
       return baseArr;
    }
    else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
          arr.indexOf(arr[i]) == (arr.length - 1) ? arr.splice((arr.length - 1), 1) : obj[arr[i]] = arr.indexOf(arr[i]);
        }
        if (arr[i] == '--discard-prev') {
          arr.indexOf(arr[i]) == 0 ? arr.splice(0, 1) : obj[arr[i]] = arr.indexOf(arr[i]);
        }
        if (arr[i] == '--double-next') {
          arr.indexOf(arr[i]) == (arr.length - 1) ? arr.splice((arr.length - 1), 1) : obj[arr[i]] = arr.indexOf(arr[i]);
        }
        if (arr[i] == '--double-prev') {
          arr.indexOf(arr[i]) == 0 ? arr.splice(0, 1) : obj[arr[i]] = arr.indexOf(arr[i]);
        }
        else {
          counter++;
        }
      }
      console.log(arr, obj);
    }
  }
  
}

module.exports = {
  transform
};
