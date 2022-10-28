//For loops
//Good for objects

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Ollie', 'Lottie', 'Megan', 'Bea'];

//For of loops
//Good for arrays

for (const user of users) {
    console.log(user);
}

// the const user of users allows you to refer to each variable of the array as you loop through.

//For in loops
//Good for objects

const loggedInUser = {
    name: "Ollie",
    age: 26,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}
//access property names dynamically

//While loops
//Good for objects. While the condition is true the loop continues

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?')
}

console.log('Done!');