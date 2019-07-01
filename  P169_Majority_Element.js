/**
 * @param {number[]} nums
 * @return {number}
 */

// Example 1:

// Input: [3,2,3]
// Output: 3

var majorityElement = function(nums) {
  var l = nums.length;
  var guard = l / 2;
  var map = {}
  for(var i = 0; i < l; i++) {
    if(map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1
    }
  }
  for(i in map) {
    if(map[i] > guard) return i
  }
};

var res = majorityElement([3,2,3])
console.log(res)