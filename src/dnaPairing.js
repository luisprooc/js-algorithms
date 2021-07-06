function pairElement(str) {
    const DNA = [];
    const pairs = {
        "A":"T",
        "T":"A",
        "C":"G",
        "G":"C"
    };

    for(let par of str){
        DNA.push([par,pairs[par]]);
    }

    return DNA;
}
  
console.log(pairElement("GCG"));