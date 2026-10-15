/*
Assignment Details:
-------------------
Write a JavaScript program to find the total sum of all numbers present in an array.

Assignment Requirements:
========================
1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final su
*/

let arrnums = [45,32,39,50,84];
let sum = 0;

for(let i = 0; i < arrnums.length; i++){

    sum = sum + arrnums[i];
}

console.log('The sum of the Array is',sum);

//Result: The sum of the Array is 250