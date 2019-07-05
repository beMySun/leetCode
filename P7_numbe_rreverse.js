/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isPositive, result;
  var temp = Math.abs(x)
  if(x > 0) {
    isPositive = true
  } else {
    isPositive = false
  }

  var t2 = (temp + '').split('').reverse().join('') - 0
  
  if(t2 <= 2147483647)  return result = isPositive ? t2 : -t2
  
  return 0
  
};
var a = reverse(-120)
console.log(a)