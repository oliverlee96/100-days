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







