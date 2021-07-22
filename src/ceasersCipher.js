function rot13(str) {
    let encodedStr = "";
    for(let letter in str){
      if(!/[\s|!|.|?]/.test(str[letter])){
        if(str[letter].charCodeAt() < 78){
          encodedStr += String.fromCharCode(str[letter].charCodeAt() + 13);
        }
  
        else{
          encodedStr += String.fromCharCode(str[letter].charCodeAt() - 13);       
        }
      }
  
      else{
        encodedStr += str[letter];
      }
  
    }
    return encodedStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));