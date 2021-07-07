function truthCheck(collection, pre) {
    for(let obj in collection){
        if(pre in collection[obj] && collection[obj][pre]){
            continue;
        }

        return false;
    }
    return true;
}
  
console.log(truthCheck([{"user": "Tinky-Winky", "sex": NaN}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));