function intersection(arr1, arr2) {
 
  const result = [];
  arr1.forEach(num => {
    if (arr2.includes(num)) {
      result.push(num);
    }
  });
  return result;
}

console.log(intersection([1,3,5,7,10], [2,3,6,8,10,20]))

module.exports = intersection;
