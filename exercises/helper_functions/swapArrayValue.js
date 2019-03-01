//swap values 
// takes an array and two indexes
function swapArrayValue(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}