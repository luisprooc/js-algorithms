import intGenerator from "../generators/intGenerator.js";
/**
 * @param {number} num
 * @return {string}
 */


const intToRoman = (num) => {
    const dict = {
        1: "I", 5: "V", 10: "X",50: "L", 
        100: "C", 500: "D", 1000: "M"
    };

    let roman = "";


    while(num){

        if(num < 5){
            if(num === 4){
                roman += dict[1] + dict[5];
                num -= 4;

            }
            
            else{
                roman += dict[1];
                num -= 1;

            }
        }

        else if(num < 10){

            if(num === 9){
                roman += dict[1] + dict[10];
                num -= 9;
            }

            else {
                roman += dict[5];
                num -= 5;
            }
        }

        else if(num < 50){
            roman += dict[10];
            num -= 10;
        }

        else if(num < 100){
            roman += dict[50];
            num -= 50;
        }

        else if(num < 500){
            roman += dict[100];
            num -= 100;
        }

        else if(num < 1000){
            roman += dict[500];
            num -= 500;
        }

        else{
            roman += dict[1000];
            num -= 1000;
        }
    }

    return roman;
}
//intGenerator(9)

console.log( intToRoman(89) );