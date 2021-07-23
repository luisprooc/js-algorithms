function steamrollArray(arr) {
  const newArr = arr.reduce((accumulator,iterator)=>
    Array.isArray(iterator)
    ? [...accumulator , ...steamrollArray(iterator)]
    : [...accumulator,iterator]
  ,[]);
  return newArr;
}


console.log(steamrollArray([1, [2], [3, [[4]]]]));
