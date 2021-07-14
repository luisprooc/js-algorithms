function fearNotLetter(str){
    for(let i = 0; i < str.length - 1; ++i){
        let operation = str[i+1].charCodeAt(0) - str[i].charCodeAt(0);
        if(operation !== 1){
            return String.fromCharCode(str[i].charCodeAt(0) + 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcdefghjklmno"));