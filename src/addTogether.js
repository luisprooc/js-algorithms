function addTogether(a,b) { 
    if(typeof a === "number"){
        if(typeof b === "undefined"){
            return function(b){
                return typeof b === "number" ? a + b : undefined; 
            }
        }
        else if(typeof b === "number"){
            return a + b;
        }
    }

}
  
console.table([
    addTogether(2,"3"),
    addTogether(2, 3),
    addTogether(5)(7),
    addTogether(23, 30),
    addTogether("http://bit.ly/IqT6zt"),
    addTogether(2)([3])
]);