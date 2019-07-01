/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
var threeSum = function(nums) {
  var l = nums.length;
  if(l === 3 && nums[0] + nums[1] + nums[2] === 0) return [nums];
  var temp = nums.sort(function(a, b) { return a - b;});
  var res = [];
  for(var i = 0; i < l; i++) {
    if(i !== 0 && temp[i] === temp[i-1]) continue;
    var j = i + 1;
    var k = l - 1;
    while( j < k) {
      var sum = temp[i] + temp[j] + temp[k];
      if(sum === 0) {
        res.push([temp[i], temp[j], temp[k]])
        // break;
        while( j++ < k && temp[j-1] === temp[j]) { /* do nothing*/}
        while( k-- > j && temp[k] === temp[k+1]) { /* do nothing*/}
      } else  if(sum < 0) {
        j++;
      } else {
        k--
      }
    }
  }
  return res;
};

var a = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(a)