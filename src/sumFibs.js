function sumFibs(num) {
    let prev = 1;
    let next = 1;
    let sum = 0;
    let cont = 0;

    while(cont <= num){

        if(next % 2 !== 0 && next <= num){
            sum += next;
        }
        
        next+= prev;
        [prev,next] = [next , prev];
        ++cont;
    }

    return sum;
}
  
console.log(sumFibs(1000));