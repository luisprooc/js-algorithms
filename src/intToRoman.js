/**
 * @param {number} num
 * @return {string}
 */

const checkValue = (num) => {
    const str = num.toString(10);
    return str[0] === "4" || str[0] === "9";
}


const intToRoman = (num) => {
    const symbols = {
        1: "I", 5: "V", 10: "X",50: "L", 
        100: "C", 500: "D", 1000: "M"
    };

    let roman = "";

    while(num){

        if(num >= 1000){
            roman += symbols[1000];
            num -= 1000;
        }

        else if(num >= 500){
            if(checkValue(num)){
                roman += symbols[100] + symbols[1000];
                num -= 900;
            }
            else{
                roman += symbols[500];
                num -= 500;
            }
        }

        else if(num >= 100){
            if(checkValue(num)){
                roman += symbols[100] + symbols[500];
                num -= 400;
            }
            else{
                roman += symbols[100];
                num -= 100;
            }
        }

        else if(num >= 50){
            if(checkValue(num)){
                roman += symbols[10] + symbols[100];
                num -= 90;
            }
            else{
                roman += symbols[50];
                num -= 50;
            }
        }

        else if(num >= 10){
            if(checkValue(num)){
                roman += symbols[10] + symbols[50];
                num -= 40;
            }
            else{
                roman += symbols[10];
                num -= 10;
            }
        }

        else if(num >= 5){
            if(checkValue(num)){
                roman += symbols[1] + symbols[10];
                num -= 9;
            }
            else{
                roman += symbols[5];
                num -= 5;
            }
        }

        else{
            if(checkValue(num)){
                roman += symbols[1] + symbols[5];
                num -= 4;
            }
            else{
                roman += symbols[1];
                num -= 1;
            }
        }

    }

    
    return roman;
}


console.log(intToRoman(83));