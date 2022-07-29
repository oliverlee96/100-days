const express = require('express')
const app = express()
app.get('/', (req,res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server running on port 3000'))


let age = 25; 
console.log(age); /* Displays the value as an alert in the browser */
let userName = 'Ollie'; /* Creating a variable with a string value */
let hobbies = ['Football', 'Music', 'The Pub']; /* Creating an array */
let job = {
    title: 'Product Manager', 
    place: 'Petersfield', 
    employer: 'Elements.cloud'
}; /* Creating an object */

console.log(hobbies[0]); /* Accessing an item in an array */
console.log(job.employer); /* Accessing an item in an object */

let adultYears; /* You can declare the variable without a value */

function calculateAdultYears() {
    adultYears = age - 18
}; /* Declares the function which calculates the number of years spent as an adult */
calculateAdultYears(); /* Calls the function */

/* Better to use the return function so that the function doesn't need to know the name of the variable */

function calculateAdultYears() {
    return age - 18
};

/* userAge is declared as a parameter of this function - it is a variable that can only be used within it, not outside */

function calculateAdultYears(userAge) {
    return userAge - 18;
};

/* So below you add the value for the variable userAge in the brackets, and it uses this to complete the calculation */

totalAdultYears = calculateAdultYears(50);
console.log(totalAdultYears);

