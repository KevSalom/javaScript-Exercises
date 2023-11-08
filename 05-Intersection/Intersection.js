function intersection(arr1, arr2) {
 
  const result = [];
  arr1.forEach(num => {
    if (arr2.includes(num)) result.push(num);
  });
  return result;
}



module.exports = intersection;
