/**
 * @param {number[]} A
 * @return {number[]}
 */

/**
  * 61 / 61 test cases passed.
    Status: Accepted
    Runtime: 96 ms
		Memory Usage: 41.6 MB
		Your runtime beats 92.36 % of javascript submissions.
  * 
  */

// https://leetcode.com/problems/sort-array-by-parity-ii/

var sortArrayByParityII = function(A) {
  let odds = A.filter(a => a % 2 === 0);
  let evens = A.filter(a => a % 2 !== 0);
  let res = [];
  let oddsGuard = 0;
  let evensGuard = 1;
  for (let i = 0; i < odds.length; i++) {
    res[oddsGuard] = odds[i];

    oddsGuard += 2;
  }
  for (let i = 0; i < evens.length; i++) {
    res[evensGuard] = evens[i];
    evensGuard += 2;
  }
  return res;
};
