console.dir(document); //Allows you to access document property within the window object
//Can use console.log but console.dir shows you full object in the console

document.body.children[1].children[0].href = "https://google.com";

//This code drills into the DOM but if the path changes your code needs to as well, otherwise it breaks
//You have to be sure of the structure especially if drilling into an array

//Better to query in case of structure changes
//Below code queries by id selector, getElementById

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

//can also be done using the querySelector, which works similar to CSS selectors using #[id]

anchorElement = document.querySelector("#external-id");
anchorElement.href = "https://academind.com";

//ADD AN ELEMENT
//1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

//2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

//3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

//REMOVE AN ELEMENT
//1. Select the element that should be removed

let removedElement = document.querySelector('h1');

//2. Remove it

removedElement.remove();
removedElement.parentElement.removeChild(removedElement); //This is used in older versions of IE as the method above is for newer

//MOVE AN ELEMENT

firstParagraph.parentElement.append(firstParagraph);

//innerHTML - access to all the HTML content within an element

firstParagraph.innerHTML = 'Hi this is <strong> important! </strong>.';