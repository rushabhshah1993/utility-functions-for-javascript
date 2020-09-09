/* 
Description: This function can be used to generate initials from a name.

Usage: Say, your application has a navigation bar with a pretty space reserved for the user icon. If your potential user is shy to add a profile picture, the next best personalization could be his initials. This will help you generate those initials.

Directions for using: You need to call this function and pass a name as a string. It would be highly advisable to separate first names and last names using spaces for this function to execute.
*/

function generateIntials(fullName) {
    let initials = '';
    fullName.split(' ').forEach(word => initials+=word[0]);
    return initials;
}

/* Example */
let initials = generateIntials('Robin van Persie');
console.log(initials); //RvP




