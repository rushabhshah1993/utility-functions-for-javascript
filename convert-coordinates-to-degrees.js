/* 
Description: This function can be used to convert an array of decimal coordinates to a string of degree coorindates.

Usage: Some developers prefer showing a location as [53.463480, -2.291383] while some prefer showing a location as 53°2'46" W, 3°17'28" N. If you possess the former and desire for the latter, this function will help.

Directions for using: You need to call this function and pass an array with latitude as the first argument and the longitude as the second argument.
*/

function convertCoordinatesToDegrees(arrayLocation) {
    let lat = +arrayLocation[0],
        long = +arrayLocation[1];

    let horizontalDirection, verticalDirection;
    if(Math.sign(lat) === 1) horizontalDirection = 'N';
    else horizontalDirection = 'S';
    if(Math.sign(long) === 1) verticalDirection = 'E';
    else verticalDirection = 'W';

    let latDegrees = Math.abs(Math.floor(lat));
    let calculateLatMins = (+lat.toString().split(".")[1]/1000000)*60;
    let latMins = Math.floor(calculateLatMins);
    let latSecs = Math.floor(+("." + +calculateLatMins.toString().split(".")[1])*60);
    let latitudeDeg = `${latDegrees}\xB0${latMins}'${latSecs}" ${verticalDirection}`;
    
    let longDegrees = Math.abs(Math.floor(long));
    let calculateLongMins = (+long.toString().split(".")[1]/1000000)*60;
    let longMins = Math.floor(calculateLongMins);
    let longSecs = Math.floor(+("." + +calculateLongMins.toString().split(".")[1])*60);
    let longitudeDeg = `${longDegrees}\xB0${longMins}'${longSecs}" ${horizontalDirection}`;

    return latitudeDeg + ", " + longitudeDeg;
}

/* Example */
let degreeLocation = convertCoordinatesToDegrees([53.463480, -2.291383]);
console.log(degreeLocation); //"53°2'46" W, 3°17'28" N"

let degreeLocation = convertCoordinatesToDegrees(['53.463480', '-2.291383']);
console.log(degreeLocation); //"53°2'46" W, 3°17'28" N"

/* P.S.: If the inquisitve you checked out the location on the map, Glory Glory Man United! :P */
