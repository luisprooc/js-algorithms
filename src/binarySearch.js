import arrayGenerator  from "../generators/arrayGenerator.js";

const binarySearch = (arr, target) => {

    for(let i = 0, pivote = parseInt(arr.length/2) ; i < arr.length;++i){
        
        if(target === pivote || target === arr[i]) return "FOUND ".concat( target );

        target > pivote?arr.slice(0,arr[i]):arr.slice(arr[i]);
    }
    return "Target Not Found";

}



console.log(binarySearch( arrayGenerator(400),3 ));