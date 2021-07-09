function myReplace(str, before, after) {
    const aux = str.search(before); 
    if(aux >= 0){
        if(str[aux] === str[aux].toUpperCase()){
            return str.replace(before,after[0].toUpperCase() + after.substring(1));
        }
        else{
            return str.replace(before,after[0].toLowerCase() + after.substring(1));
        }
    }
}
  
console.log(myReplace("His name is Tom", "Tom", "john"));