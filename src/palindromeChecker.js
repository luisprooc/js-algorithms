function palindrome(str) {
    let check = ""
    str = str.toLowerCase().replace(/[\W_]/g,"");
    for(let i = str.length -1 ; i >= 0; --i){
      check+= str[i];
    }
    if(check === str){
      return true;
    }
  
    return false;
  }
  
  
  
console.log(palindrome("eye"));