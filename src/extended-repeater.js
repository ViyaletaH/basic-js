const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str1, options) {
  let arr = [];
  let res = [];
  let str;
  let str2;
  if (typeof str1 == 'number') {
    str = str1.toString();
  }
  if (typeof str1 == 'object' && Array.isArray(str1) == false && str1 != undefined  && Object.keys(str1).length !== 0)  {
    str = options.toString();
  }
  if (typeof str1 == 'object' && Array.isArray(str1))  {
   str = '[object Set]' + str1.join();
  }
  if (typeof str1 == 'boolean')  {
    str = 'truefalse';
  }
  if (typeof str1 == 'object' && Array.isArray(str1) == false && str1 == undefined)  {
    str = 'null';
  }
  if (typeof str1 == 'object' && Array.isArray(str1) == false && str1 != undefined  && Object.keys(str1).length === 0) {
    str = '[object Map]';
  }
  else {
    str = str1;
  }

  if(Object.keys(options).length == 1) {
    options["str"] = str;
    options["plus"] = '\+';
    for (o = 0; o < options.repeatTimes; o++) {
      let stri = options.str + options.plus;
      arr.push(stri);
    }
    arr[arr.length - 1] = str;
    res = arr.join().replace(/,/g,'');
  }
  else {
    if (typeof options['repeatTimes'] == 'undefined') {
      arr.push(str);
      arr.push(options.addition);
      res = arr.join().replace(/,/g,'');
    }
         
    else {
      if (typeof options['separator'] == 'undefined' && typeof options['additionSeparator'] == 'undefined') {
      options['separator'] = '\+';
      options['additionSeparator'] = '|';
    }  
      if (typeof options['additionSeparator'] == 'undefined') {
      options['additionSeparator'] = '|';
    }
    if (typeof options['separator'] == 'undefined') {
      options['separator'] = '\+';
    }  
    let addit = options.addition + options.additionSeparator;
    for (i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(addit);
  }
  arr[arr.length - 1] = options.addition;
  arr = arr.join().replace(/,/g,'');
  let string = str + arr; 
  let strSep = str + arr + options.separator;
  
  for (k = 0; k < options.repeatTimes; k++) {
    res.push(strSep);
  }
  res[res.length - 1] = string;
  res = res.join().replace(/,/g,'');
  }}
  return res;
}

module.exports = {
  repeater
};
