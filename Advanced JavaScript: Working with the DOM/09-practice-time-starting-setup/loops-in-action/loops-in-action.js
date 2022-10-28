//First Example: Sum numbers using for loop

const calculateSumButtonElement = document.querySelector('#calculator button') //select first button in the element of id calculator

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value; //need value property to access the entered value

    let sumUpToNumber = 0; //for as long as number is <= the entered number the loop continues

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    };

    const outputResultElement = document.getElementById('calculated-sum'); //storing the value for the calculated sum

    outputResultElement.textContent = sumUpToNumber; //outputs the sum value into the correct element on the page
    outputResultElement.style.display = 'block'; // blocks the "display: none" from stylesheet 

};

calculateSumButtonElement.addEventListener('click', calculateSum);

//Second example: Highlight links using for of loop

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a'); //returns ALL matching elements not just the first. This returns an array

    for (const anchorElement of anchorElements) { //accesses each value in the array 
        anchorElement.classList.add('highlight'); //highlights the selected elements, in this case all a elements

    };

}

highlightLinksButtonElement.addEventListener('click', highlightLinks);


//Third example: Display user data using for in loop
//Best for accessing each property in an object

let dummyUserData = {
    firstName: "Ollie",
    lastName: "Jeffcote",
    age: 26,
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = ''; //removes all existing list items, before we create and add new ones in the function below. Otherwise it just adds the same data again and again

    for (const key in dummyUserData) { //accesses each property in the object 
        const newUserDataListItemElement = document.createElement('li'); //pass the name, in this case li to create a list item
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key]; //this accesses the values of each different key. Also creating a new object to store the output for better readability
        newUserDataListItemElement.textContent = outputText;

    outputDataElement.append(newUserDataListItemElement); //adds the new item to the end
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

//Fourth example: Find number of dice rolls needed using a while loop

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() { //function to roll the dice
    //return Math.random() returns any value between 0 and 1 and not including either, so e.g. 0.543678
    return Math.floor(Math.random() * 6 + 1);//ensures it's integers only, and returns any value between 0 and 6 due to the multiplication. +1 needed to include 6. Math.floor rounds down
}

function deriveNumberOfDiceRolls() { //function to output the number of rolls needed
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value; //this is a string, as the value of an input field in html is always a string
    diceRollsListElement.innerHTML = ''; //clear any existing list items

    let hasRolledTargetNumber = false; //let instead of const because the value will change. It's a boolean value so the name is a question, the value answers it
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
    //     if (rolledNumber == enteredNumber); { //bc enteredNumber is a string we don't use === to match types
    //         hasRolledTargetNumber = true;
    // };
        numberOfRolls++;    //will increment number of rolls by one each time the loop runs
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber; //storing the boolean value into the variable, we just store the comparison result which will yield true or false
    };

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber; //outputs the inputted value for target number into "Y" in the statistic
    outputTotalRollsElement.textContent = numberOfRolls; //outputs the number of rolls value into "X" in the statistic

};

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
