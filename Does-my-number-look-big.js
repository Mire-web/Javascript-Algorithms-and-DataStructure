//check if number is narcissistic(if sum of digits == number)
function narcissistic(value) {
  //initiate sum value
  let sum = 0;
  //make array from value && add all array items exponential total digits
  let strVal = value.toString().split('').map(item=>sum += (item**value.toString().split('').length));
  return sum == value ? true:false;
}
