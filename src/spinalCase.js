function spinalCase(str) {
    const regex = new RegExp(/_|-|\s/,"g"); 
    if(regex.test(regex)){
        return str.split(regex).join("-").toLowerCase();
    }
}
  
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('this IsSpinal Tap'));
console.log(spinalCase('Teletubbies say Eh-oh"'));