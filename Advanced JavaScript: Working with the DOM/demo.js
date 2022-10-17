let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxChars = productNameInputElement.maxLength;

function updateRemainingChars(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    
    let remainingChars = maxChars - enteredTextLength;

remainingCharsElement.textContent = remainingChars;

if (remainingChars === 0) {
   remainingCharsElement.classList.add ('error');
   productNameInputElement.classList.add ('error'); // classList.add adds the class to it instead of replacing.
} else if (remainingChars <= 10) {
    remainingCharsElement.classList.add ('warning');
    productNameInputElement.classList.add ('warning');
    remainingCharsElement.classList.remove ('error');
    productNameInputElement.classList.remove('error');
}
else {
    remainingCharsElement.classList.remove ('warning');
    productNameInputElement.classList.remove('warning');
}




};



productNameInputElement.addEventListener('input', updateRemainingChars);