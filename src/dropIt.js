function dropElements(arr, func) {
    let newArr = [];

    for(let i in arr){
        console.log(func(arr[i]))
        if(func(arr[i])){
            newArr = arr.slice(i);
            break;
        }
    }
    return newArr;
}
  
console.log(dropElements([0,1,0,1], function(n) {return n === 1; }));