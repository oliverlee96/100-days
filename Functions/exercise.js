// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

/* Excercise 1 and 2 */

let courseName = "100 Days of Web Development";
let coursePrice = 12.99;
let courseGoals = ["Learn JavaScript", "Create a website", "Understand node.js"];

alert(courseName);
alert(coursePrice);
alert(courseGoals);

/* Exercise 3 */

let onlineCourse = {
    name: "100 Days of Web Development",
    price: 12.99,
    goals: ["Learn JavaScript", "Create a website", "Understand node.js"],
};

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

/* Exercise 4 */

alert(onlineCourse.goals[1]);

/* Exercise 5 and 6 */

function getListItem(array,arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
};

let firstGoal = getListItem(onlineCourse.goals, 0);
alert(firstGoal);




