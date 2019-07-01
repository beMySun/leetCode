/**
 * 344. Reverse String
 * 
 */

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

/**
 * 
 * Success
  Runtime: 108 ms, faster than 94.22% of JavaScript online submissions for Reverse String.
  Memory Usage: 47.3 MB, less than 18.88% of JavaScript online submissions for Reverse String.
 */

var reverseString = function(s) {
  var l = s.length;
  if(l === 0) return null;
  var swap = function(i, j) {
    if(s[i] !== s[j]) {
      let temp;
      temp = s[i]
      s[i] = s[j]
      s[j] = temp
    } 
  }
  for(let i = 0; i < l/2; i++) {
    swap(i, l-i-1)
  }
  return s;
};


var a = reverseString([1,3,2, 5,4]);
console.log(a);
