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

```
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