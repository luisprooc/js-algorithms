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

```javascript
sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.
```


## Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

```javascript

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
```


## Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

```javascript

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

destroyer([2, 3, 2, 3], 2, 3) should return [].

destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
```


## Make a Person

Fill in the object constructor with the following methods below:

```javascript

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

```javascript

Object.keys(bob).length should return 6.

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return the string Bob.

bob.getLastName() should return the string Ross.

bob.getFullName() should return the string Bob Ross.

bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").

bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").

bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
```


## Range of Numbers Recursive 

We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.


```javascript
Your function should return an array.

Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

rangeOfNumbers should use recursion (call itself) to solve this challenge.

rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

rangeOfNumbers(4, 4) should return [4].
```


## Filtered Array

We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.


```javascript
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]

filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]

filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]

filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []

The filteredArray function should utilize a for loop
```


## Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.


```javascript
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
```


## Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


```javascript
confirmEnding("Bastian", "n") should return true.

confirmEnding("Congratulation", "on") should return true.

confirmEnding("Connor", "n") should return false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.

confirmEnding("He has to give me a new name", "name") should return true.

confirmEnding("Open sesame", "same") should return true.

confirmEnding("Open sesame", "sage") should return false.

confirmEnding("Open sesame", "game") should return false.

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.

confirmEnding("Abstraction", "action") should return true.

Your code should not use the built-in method .endsWith() to solve the challenge.
```


## Get Index

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

```javascript
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.

getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.

getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.

getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.

getIndexToIns([40, 60], 50) should return 1.

getIndexToIns([40, 60], 50) should return a number.

getIndexToIns([3, 10, 5], 3) should return 0.

getIndexToIns([3, 10, 5], 3) should return a number.

getIndexToIns([5, 3, 20, 3], 5) should return 2.

getIndexToIns([5, 3, 20, 3], 5) should return a number.

getIndexToIns([2, 20, 10], 19) should return 2.

getIndexToIns([2, 20, 10], 19) should return a number.

getIndexToIns([2, 5, 10], 15) should return 3.

getIndexToIns([2, 5, 10], 15) should return a number.

getIndexToIns([], 1) should return 0.

getIndexToIns([], 1) should return a number.
```


## Chunk Array in Groups

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```javascript
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

```


## Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

* If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

* If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

```javascript
translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
```


## Square List

Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

```javascript
squareList should be a function.

for, while, and forEach should not be used.

map, filter, or reduce should be used.

The function should return an array.

squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].

squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].

```


## Restrict Possible Usernames

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

* Usernames can only use alpha-numeric characters.

* The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

* Username letters can be lowercase and uppercase.

* Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

```javascript
Your regex should match the string JACK

Your regex should not match the string J

Your regex should match the string Jo

Your regex should match the string Oceans11

Your regex should match the string RegexGuru

Your regex should not match the string 007

Your regex should not match the string 9

Your regex should not match the string A1

Your regex should not match the string BadUs3rnam3

Your regex should match the string Z97

Your regex should not match the string c57bT3

Your regex should match the string AB1

Your regex should not match the string J%4

```


## DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```javascript
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

```


## Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

```javascript
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

```


## Add Together

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

```javascript
addTogether(2, 3) should return 5.

addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("http://bit.ly/IqT6zt") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.

```


## Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

```javascript
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true.

```


## Binary Agents

Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

```javascript
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!

```


## Wherefore Art Thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

```javascript
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []

```


## Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

```javascript
sumFibs(1) should return a number.

sumFibs(1000) should return 1785.

sumFibs(4000000) should return 4613732.

sumFibs(4) should return 5.

sumFibs(75024) should return 60696.

sumFibs(75025) should return 135721.

```


## Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

```javascript
sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.

```


## Convert HTML Entities 

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```javascript
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List") should return the string Schindler&apos;s List.

convertHTML("<>") should return the string &lt;&gt;.

convertHTML("abc") should return the string abc.

```


## Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

```javascript
myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.

myReplace("His name is Tom", "Tom", "john") should return the string His name is John.

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

```


## Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

```javascript
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

```


## Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


```javascript
smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.

```