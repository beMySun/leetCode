/**
 * @param {number[]} A
 * @return {number[]}
 */

// https://leetcode.com/problems/sort-array-by-parity-ii/

/**
 * Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

  Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

  You may return any answer array that satisfies this condition.
 * 
 */

/**
  * 61 / 61 test cases passed.
    Status: Accepted
    Runtime: 96 ms
    Memory Usage: 41.6 MB
  * 
  */

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
