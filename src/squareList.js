const squareList = arr =>  {
    return arr.filter(number => {
        if(parseInt(number) === number && number > 0){
        return number;
    }
    })
    .reduce((accumulator,item) => {
      accumulator.push(item ** 2);
        return accumulator;
    },[])
}


const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);