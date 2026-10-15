/*
Assignment Details:
------------------
Write JavaScript programs using different array methods instead of loops.

Assignment Requirements:
=======================
1 Use push() to add elements into an array
2 Use pop() to remove the last element
3 Use shift() to remove the first element
4 Use unshift() to add an element at the beginning
5 Use includes() to check whether an element exists
6 Use indexOf() to find the position of an element
7 Use join() to convert array into string
8 Use reverse() to reverse the array
9 Use sort() to sort the array
*/

let numbers = [10, 42, 7, 98, 73, 29];
console.log(numbers);

//push()
numbers.push(102);
console.log(numbers);

//pop()
numbers.pop();
console.log(numbers);

//shift()
numbers.shift();
console.log(numbers);

//unshift()
numbers.unshift(105);
console.log(numbers);

//includes()
console.log(numbers.includes(98));

//indexOf()
console.log(numbers.indexOf(73));

//join()
console.log(numbers.join('-'));

//reverse()
console.log(numbers.reverse());

//sort()
console.log(numbers.sort((a,b)=>b-a)); //descending order

/*
Result
======
[ 10, 42, 7, 98, 73, 29 ]
[
  10, 42,   7, 98,
  73, 29, 102
]
[ 10, 42, 7, 98, 73, 29 ]
[ 42, 7, 98, 73, 29 ]
[ 105, 42, 7, 98, 73, 29 ]
true
4
105-42-7-98-73-29
[ 29, 73, 98, 7, 42, 105 ]
[ 105, 98, 73, 42, 29, 7 ]
*/