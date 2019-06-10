/**
 * 29 / 29 test cases passed.
    Status: Accepted
    Runtime: 172 ms, faster than 16.47% of JavaScript online submissions for Two Sum.
    Memory Usage: 34 MB, less than 95.19% of JavaScript online submissions for Two Sum.
 */

//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
