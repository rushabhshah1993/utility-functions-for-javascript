/* 
Description: This function can be used to return whether a given time of the day is morning, afternoon, evening, or night.

Usage: Say, your application wants to greet the user when he/she logins to your application. This code can be used for finding out the appropriate greeting for the day.

Directions for using: You need to call this function and pass a name as a string. It would be highly advisable to separate first names and last names using spaces for this function to execute.
*/

function fetchGreeting(datetime) {
    let currentHour = new Date(datetime).getHours();

    if(isNaN(currentHour)) throw 'Invalid Date. Kindly check your date format.'
    else {
        if(currentHour < 12) return 'Morning';
        else if(currentHour < 17) return 'Afternoon';
        else return 'Evening';
    } 
}

/* Example */
let greeting1 = fetchGreeting("12/01/2020");
console.log(`Good ${greeting1}`); //Good Morning

let greeting2 = fetchGreeting("08/07/2020 17:09:24");
console.log(`Good ${greeting2}`); //Good Evening

let greeting3 = fetchGreeting("13/01/2020 19:00:12");
console.log(greeting3); //Uncaught Invalid Date. Kindly check your date format.