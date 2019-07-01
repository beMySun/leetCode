/**
 * 
  8 / 8 test cases passed.
  Status: Accepted
  Runtime: 52 ms
  Memory Usage: 33.7 MB
  Your runtime beats 88.27 % of javascript submissions.
*/

// https://leetcode.com/problems/to-lower-case/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
      res += str.charAt(i);
    }
  }
  return res;
};
