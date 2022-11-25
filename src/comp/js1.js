// function linear(arr, elem) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === elem) {
//       return i;
//     }
//   }
//   return -1;
// }
// linear([1, 2, 3, 4, 5, 6, 7], 9);
// console.log(linear);

//
function bis(arr, element) {
  let start = 0;
  let end = arr.lenght - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== element) {
    if (element < arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
}
bis([1, 2, 3, 4, 5, 6, 7], 5);
console.log(bis);
