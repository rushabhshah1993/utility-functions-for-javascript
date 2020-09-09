/* 
Description: This function can be used to generate random integer between two numbers.

Usage: When you waant to generate a random number between two bounds. 
For instance, if you are a school teacher and you want to randomly pick up a student between roll numbers (IDs) 40 and 60.

Directions for using: You need to call this function and pass the lower bound of the range as 
the first argument, and the upper bound of the range as the second argument.
*/

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

/* Example */
let result1 = generateRandomNumber(1, 250); 
console.log(result1);

/* 
    Credits: A big thanks to https://stackoverflow.com/users/383148/francisc and https://stackoverflow.com/users/1267639/jonschlinkertfor this solution.
*/

