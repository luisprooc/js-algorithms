function sumPrimes(num) {
    let sum = 0;
    let prime = false;
    for(let i = 2; i <= num; ++i){
        for(let j = 1; j < i; ++j){
            if(i % j === 0 && j > 1){
                prime = false;
                break;
            }
            else{
                prime = true;
            }
        }
        if(prime){
            sum += i;
        }
    }
    return sum;
}
  
console.log(sumPrimes(977));