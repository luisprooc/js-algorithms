function spinalCase(str) {
    let newStr = str;
    newStr = newStr.replace(/[\s|_]/g,"-");
    if(/[a-z]+[A-Z]/.test(newStr)){
      let copyStr = newStr[0];
      
      for(let i = 1; i < newStr.length; ++i){
        if(newStr[i].toUpperCase() === newStr[i] && newStr[i] !== "-"){
          if(newStr[i -1] !== "-"){
            copyStr += "-";
          }
        }
        copyStr += newStr[i];
        
      }
      return copyStr.toLowerCase();
    }
    return newStr.toLowerCase();
  }
  
  console.log(spinalCase('AllThe-small Things'));