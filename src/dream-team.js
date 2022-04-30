const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function createDreamTeam(members) {
  let abbr;
  let preFinal = [];
  let final = [];
  let preStr;
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim().slice(0, 1);
    } 
    else {
      let removed = members.splice([i], 1);
    }

  }
    let k = 0; 
    while (k < members.length) {
      if (members[k].length > 1) {
        members[k] = members[k].trim().slice(0, 1);
      }
      else {
        k++;
      }
    }
    members = members.sort().join().toUpperCase();;
    abbr = members.replace(/[,]/gi, '');

  } else {
    abbr = false;
  };
  
  return abbr;
}

module.exports = {
  createDreamTeam
};
