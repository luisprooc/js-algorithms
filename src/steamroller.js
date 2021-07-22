function flatten(arr){
  let newArr = []
  if(!arr.length){
    return newArr;
  }

  else if(typeof(arr) !== "object"){
    newArr.push(arr);
    return newArr + flatten(arr) + 1;
  }

  else{
    return flatten(arr.splice(1))
  }
}

function steamrollArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; ++i){
      if(arr[i].length && typeof(arr[i]) !== "string"){
        newArr.push(arr[i]);
      }
      else{
        console.log(flatten(arr));
      }
    }
    return newArr;
}

console.log(flatten([3, [[4]]]));
//console.log(steamrollArray([1,[2], [3, [[4]]]]));