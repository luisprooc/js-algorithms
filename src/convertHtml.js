function convertHTML(str) {
    
    switch(true){
        case /&/.test(str):
            str = str.replace(/&/g,"&amp;");
        
        case /</.test(str):
            str = str.replace(/</g,"&lt;");

        case />/.test(str):
            str = str.replace(/>/g,"&gt;");

        case /"/.test(str):
            str = str.replace(/"/g,"&quot;");

        case /'/.test(str):
            str = str.replace(/'/g,"&apos;");

        default:
            return str;
    };
    
}
  
console.log(convertHTML('Stuff in "quotation marks"'));