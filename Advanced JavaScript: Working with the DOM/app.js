console.dir(document); //Allows you to access document property within the window object
//Can use console.log but console.dir shows you full object in the console

document.body.children[1].children[0].href = "https://google.com";

//This code drills into the DOM but if the path changes your code needs to as well, otherwise it breaks
//You have to be sure of the structure especially if drilling into an array

//Better to query in case of structure changes
//Below code queries by CSS selector
document.getElementById('some-id');
document.querySelector('.some-class');



