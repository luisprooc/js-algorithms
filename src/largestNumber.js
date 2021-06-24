function largestOfFour(arr) {
    const largestArray = [];
    for(let i in arr){
        largestArray.push(Math.max(...arr[i]));
    }
    return largestArray;
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));