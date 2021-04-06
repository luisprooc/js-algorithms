/**
 * @param {array,array} 
 * @return {array}
 */

const diffArray = (arr1, arr2) => {
  let newArr = [];

  for(let i of arr1){

    if(!arr2.includes(i)) newArr.push(i);

  }

  for(let i of arr2){

    if(!arr1.includes(i)) newArr.push(i);

  }

  return newArr;
}
  
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));