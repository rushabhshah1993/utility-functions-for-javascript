/* 
Description: This function can be used to convert an number without commas to the ones with commas at appropriate places.

Usage: If you follow UK or US standards, you will notice the numbers printed as 123,000. The same number is printed in Indian standards as 1,23,000. These functions will help you convert a number without commas (e.g. 123000) to the ones with commas (e.g. 123,000).

Directions for using: You need to call this function and pass a number or a numeric string.
*/

function numberWithCommasUK(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* Example */
let number1 = numberWithCommasUK(123000);
console.log(number1); //123,000

let number2 = numberWithCommasUK(12453000);
console.log(number1); //12,453,000