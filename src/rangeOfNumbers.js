function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum) return [];

    else{
        const myArr = rangeOfNumbers(startNum + 1, endNum);
        myArr.unshift(startNum);
        return myArr;
    }
};

console.log(rangeOfNumbers(1,5));