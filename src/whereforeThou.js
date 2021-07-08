function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source);
    let aux = false;
    for(let obj in collection){
        for(let k in keys){
            if(source[keys[k]] !== collection[obj][keys[k]]){
                aux = false;
                break;
            }
            else{
                aux = true;
            }
        }

        if(aux){
            arr.push(collection[obj]);
            aux = false;
        }
    }
    return arr;
}
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], {last: "Capulet" }));