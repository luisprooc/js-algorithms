/**
 * @param {arr} arr
 * @return {arr}
 */

 'use strict';


const destroyer = (arr,...args) => arr.filter(item => !args.includes(item));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

