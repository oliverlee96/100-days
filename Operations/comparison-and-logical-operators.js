// Comparison Operators (Derive Boolean values)

// ==, ===

// Equality (value and/or type)

// 2 == 2 true
// '2' === 2 false

// >, <, >=, <=

// Greater than, less than, etc.

// !, !=, !==

// Negative/inverse (i.e. something is not true.)


//Logical Operators (Combine Boolean values)

// && AND, true only if both values are true. 

// 5==5 && 3 < 4 is true
// 5==5 && 6 < 4 is false

// || OR, true if one of both values is true. So both examples above would yield true.

//Truthy and Falsy

let enteredUserName = ''; //0

if (enteredUserName) {
    console.log ('Input is valid');
};

// an empty string value or 0 is treated as false. A string with a value in, even a blank space counts as true.