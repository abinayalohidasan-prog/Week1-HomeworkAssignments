/* 
Assignment Details:
-------------------
Create a JavaScript program that prints the square of each number from 10 to 1 using a for loop.

Assignment Requirements:
========================
1. Declare and initialize a variable to start from 10.
2. Use a for loop to iterate from 10 down to 1.
3. Calculate the square of each number inside the loop.
4. Print the square of each number in reverse order.
5. Do not use arrays or built-in functions to calculate the squares
*/
function squaresinReverseOrder(){

let num = 1;
for(let i = 10; i>=num;i--){
    let result = i*i;
    console.log('The square of ',i,' is ', result);
}
}
squaresinReverseOrder();

/*
Result:
The square of  10  is  100
The square of  9  is  81
The square of  8  is  64
The square of  7  is  49
The square of  6  is  36
The square of  5  is  25
The square of  4  is  16
The square of  3  is  9
The square of  2  is  4
The square of  1  is  1
*/