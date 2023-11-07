function BinarySearch(arr, value, result = []) {
  // Tu código aquí

  const large = arr.length;

  if(!large || (large <= 2 && !arr.includes(value))) return 'Value not found'
  if(large <= 2 && arr.includes(value)) return (value !== 0)?[...result, 0, value]:[...result, 0];
    
  const index = ((large/2)%1 === 0)? large/2 - 1: Math.floor(large/2)
  result.push(arr[index])
 
  if(arr[index] === value) return result
  else{
    const newArr = (value < index && index)? arr.slice(0,index) : arr.slice([index])
    return BinarySearch(newArr, value, result)
  }
}






// function BinarySearch(arr, value) {
//   const result = [];
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     console.log('holis')
//     const mid = Math.floor((left + right) / 2);
//     result.push(arr[mid]);

//     if (arr[mid] === value) {
//       return result;
//     } else if (arr[mid] < value) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return "Value not found";
// }

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

console.log(BinarySearch(testArray, 0))

module.exports = BinarySearch;
