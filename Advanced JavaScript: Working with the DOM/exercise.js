// Exercise Time!

console.dir(document);

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

var h1_Element = document.body.childNodes[0];
console.dir(h1_Element);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

console.dir(h1_Element.parentELement);

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(h1_Element.previousSibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

var h1_byId = document.getElementById('Hi');

console.dir(h1_byId);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

var newThing = document.querySelector('.yesNo');
console.dir (newThing);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

newThing.textContent = "New text now!"
console.dir(newThing);






