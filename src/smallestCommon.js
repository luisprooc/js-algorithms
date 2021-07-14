function commonDivisor(arr,divisor){
    for(let [small,big] = arr;small <= big; ++small){
        if(divisor % small !== 0) return false;
    }
    return true;
}

function smallestCommons(arr) {
    arr = arr.sort((a,b) => a-b);
    let [small,big] = arr;
    let divisor = big * 2;
    while(true){
        if(divisor % small === 0 && divisor % big === 0){
            if(commonDivisor(arr,divisor)) return divisor;
        }
        ++divisor;
    }

}
  
console.log(smallestCommons([2,10]));