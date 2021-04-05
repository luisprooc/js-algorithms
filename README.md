# JS ALGORITHMS 🧩

### SITES FOR PRACTICING ALGORITHMS:

- [Leetcode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [CoderWars](https://www.codewars.com/)
- [Edabit](https://edabit.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

## DELETE DUPLICATE

Given an array of n elements repeats,  remove the repeating data and return the 
new array. Some tests cases below:

``` javascript
console.log( deleteDuplicate([1,2,3,4,4,5,4,3,2,1,67,4,3]) )

> [ 1, 2, 3, 4, 5, 67 ]

console.log(deleteDuplicate( ["Juan","Pedro","Juan"] ));

> [ 'Juan', 'Pedro' ]
```


## BINARY SEARCH

 Search a sorted array by repeatedly dividing the search interval in half. Begin with an 
 interval covering the whole array. If the value of the search key is less than the item in the middle of 
 the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly 
 check until the value is found or the interval is empty.

 The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

 We basically ignore half of the elements just after one comparison:

- Compare x with the middle element.
- If x matches with middle element, we return the mid index.
- Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
- Else (x is smaller) recur for the left half.



## Integer to Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

| Symbol      | Value       |
| ----------- | ----------- |
| V           |  5          |    
| I           |  1          |
| X           |  10         |
| L           |  50         | 
| C           |  100        |
| D           |  500        |
| M           |  1000       |

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.


Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
Accepted
463,840
Submissions
814,452


## Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.



## Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.

[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.

[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.