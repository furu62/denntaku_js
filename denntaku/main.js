let displayValue = '';
let is_calc = false;
let display = document.getElementById("display");

function appendNumber(number){
    if (displayValue[0] === "0"){
        displayValue = number;
    }else{
       displayValue += number;
    }
    
    updateDisplay();
}


function appendOperator(operator){
    //displayValue += operator;
    if(displayValue.slice(-1) === "+"){
        return;
    }else if(displayValue.slice(-1) === "-"){
        return;
    }else if(displayValue.slice(-1) === "*"){
        return;
    }else if(displayValue.slice(-1) === "/"){
        return;
    }else{
        displayValue += operator;
    }
    
    updateDisplay();
}


function appendDot(){
    if(!displayValue.includes('.')){
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}

function calculate(){
    try{
        displayValue = eval(displayValue);
        updateDisplay();
    }catch(e){
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}




//$(document).ready(function(){
//    $("#plus").click(function(){
//        $(this).prop('disabled',true)
//    });
//});