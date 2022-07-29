//Math operations

// Your 4 standard operations
console.log(1 + 2)
console.log(7 - 4)
console.log(3 * 3)
console.log(10 / 5)

//Types of numbers
14 //integer
2.5 //floating point or float (decimals)

//Modulus operator
//This yields the remainder of the division of the 2 numbers. How often 4 fits into 10, and then gives us the remainder.
console.log(10 % 4) //Expected remainder = 2

//Don't forget in longer mathematical operations the usual priorities apply (BODMAS)

let result = (10 + 11 * 6);
result = 10 * 4;
result = result + 1; //You can use existing variables on both sides of the equation, the right side of the equation will be executed first

result++; //Result = result + 1
result--; //Result = result - 1

result += 5; //Result = result + 5
result -= 5; //Result = result - 5
result /= 5; //Result = result / 5
result *= 5; //Result = result * 5

age = 4 ** 3 //Exponential operator (age = 4 * 4 * 4)

console.log ('Ollie' + ' ' + 'Jeffcote'); //concatenating 2 strings
// can't use the minus operator for this
// you would get a result of NaN (Not a Number)

//Could also be done by storing each string in a different variable and adding those together, but
//if you're not using the variables anywhere else there's not much point.

let userName = 'Ollie';
console.log(userName.length); //Gets the length of the string
console.log(userName.toUpperCase()); //This is a method so you need to add () at the end to execute it

//This works for arrays too.
let hobbies = ['Sports', 'Cooking'];
console.log(hobbies.length); //This will count how many items in the array
