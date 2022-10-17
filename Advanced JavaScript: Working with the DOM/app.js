let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContext = 'Clicked!';
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data; will show the individual added letter not the full word
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);

//We are listening to each keystroke and you will see it displayed in the console log of the browser.
//Event object automatically generated and logged also , describing the event that occurred. 
//This includes the "data" property which shows the value


