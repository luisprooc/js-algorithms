function uniteUnique(...args) {
    const uniteArray = args[0];
    args = args.splice(1);
    for(let i = 0; i < args.length; ++i){
        for(let j = 0; j < args[i].length; ++j){
            if(!uniteArray.includes(args[i][j])){
                uniteArray.push(args[i][j]);
            }
        }    
    }

    return uniteArray;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));