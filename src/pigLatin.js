function translatePigLatin(str) {
    if(/^[a,e,i,o,u]/.test(str)){
        return str + "way";
    }
    else if(/[a,e,i,o,u]/g.test(str)){
        const regex = /^[b-d,f-h,j-n,p-t,v-z]*/g;
        const consonants = str.match(regex).toString();
        return str.substring(consonants.length) + consonants + "ay"
    }
    else{
        return str + "ay";
    }

}
  
console.log(translatePigLatin("schwartz"));
