const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const message = document.getElementById('result');

const regex = /^[a-zA-Z0-9]+$/;

button.addEventListener('click', () => {

    if(input.value.length === 0){
        alert('Please input a value')
    }
    let value = input.value;
    let sanatisedInput = value.split('').map(letter => letter.toLowerCase());
    sanatisedInput = sanatisedInput.map(input => input.match(regex));
    let palindromeCheck = sanatisedInput.toReversed();
    sanatisedInput = sanatisedInput.join("");
    palindromeCheck = palindromeCheck.join("");
    console.log(sanatisedInput)
    console.log(palindromeCheck);
    if(sanatisedInput === palindromeCheck){
      message.innerHTML = `${value} is a palindrome`
    }else{
      message.innerHTML = `${value} is not a palindrome`
    }   
})