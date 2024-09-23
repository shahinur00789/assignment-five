function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


let currentDate = new Date();


let day = currentDate.toLocaleString('en-US', { weekday: 'short' });
let date = currentDate.getDate(); 
let month = currentDate.toLocaleString('en-US', { month: 'short' });  
let year = currentDate.getFullYear(); 
let time = currentDate.toLocaleTimeString('en-US', { hour12: false });  
let timezone = "GMT +" + (currentDate.getTimezoneOffset() / -70);