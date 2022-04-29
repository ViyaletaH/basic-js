const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let no = 0;
  
  let array1 = s1.split('');
  let array2 = s2.split(''); 
  let arr1 = array1.sort();
  let arr2 = array2.sort();
  let obj = {};
  let objTwo = {};
   
  for(let i = 0; i < arr1.length; ++i){
   let com = arr1.filter(item => item === arr1[i]).length;
    obj[arr1[i]] = com;
  }  

  for(let k = 0; k < arr2.length; ++k){
   let com = arr2.filter(item => item === arr2[k]).length;
    objTwo[arr2[k]] = com;
  }  
  let keys = Object.keys(obj);

  for(let j = 0; j < keys.length; j++) {
    let symbol = keys[j];

    if (obj[keys[j]] == objTwo[keys[j]]) {
      counter += obj[keys[j]];
    }
    
    if (obj[keys[j]] > objTwo[keys[j]]) {
      counter += objTwo[keys[j]];
    }
    
    if (obj[keys[j]] < objTwo[keys[j]]) {
      counter += obj[keys[j]];
    }
      
    else {
      no++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
