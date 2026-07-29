let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function sqrt(){
    if(display.value!=""){
        display.value = Math.sqrt(eval(display.value));
    }
}

function square(){
    if(display.value!=""){
        let n = eval(display.value);
        display.value = n*n;
    }
}

function reciprocal(){
    if(display.value!=""){
        display.value = 1/eval(display.value);
    }
}

function percentage(){
    if(display.value!=""){
        display.value = eval(display.value)/100;
    }
}