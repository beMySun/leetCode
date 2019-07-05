/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var store, array, result;
    if(nums1.length >= nums2.length) {
      store = nums1;
      array = nums2
    } else {
      store = nums2;
      array = nums1
    }

    for(var i = 0; i < array.length; i++) {
      var value = array[i]
      if(store.indexOf(value) >= 0 && result.indexOf(value) < 0) {
        result.push(value)
      }
    }
    return result
    // return [...new Set(result)]
};


// Runtime: 80 ms, faster than 10.25% of JavaScript online submissions for Intersection of Two Arrays.
// Runtime: 68 ms, faster than 31.97% of JavaScript online submissions for Intersection of Two Arrays.