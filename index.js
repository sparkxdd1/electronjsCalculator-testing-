
const display = document.getElementById('display');

function pasteOnDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function backspace(){
    const value = display.value;
    display.value = value.slice(0, -1);
}
function result(){
    
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

