const display = document.getElementById('input');
const op = document.querySelectorAll('.operators div');
const number = document.querySelectorAll('.numbers div');
const equal = document.getElementById('result');
const clear = document.getElementById('clear');
var resultDisplayed = false;

//array to store inputs inclucing numbers and operators
let num1 = '';
let num2 = '';
let result = '';
let lastOp = '';
let haveDot = false;

function clr(){
    display.innerHTML = '';
    num1 = '';
    num2 = '';
    lastOp = '';
    result = '';
}

function show(value){
    display.innerHTML = value;
}

function compute(num1,num2,lastOp){
    if(num2==='' && lastOp===''){
        return 'Error';
    }
    if(num2==='' && lastOp!=''){
        return 'Error';
    }
    switch(lastOp){
        case "\u00d7": 
            return (parseFloat(num1) * parseFloat(num2) ).toFixed(2);
        case '+':
            return ( parseFloat(num1) + parseFloat(num2) ).toFixed(2);
        case "\u00f7":
            return ( parseFloat(num1) / parseFloat(num2) ).toFixed(2);
        case '-':
            return ( parseFloat(num1) - parseFloat(num2) ).toFixed(2); 
    }
    lastOp = '';
}

// result = compute(num1, num2, lastOp);

//add click eventListener to numbers
number.forEach(function(btn){
    btn.addEventListener('click', function() {
    if(display.innerHTML === 'Error'){
        clr();
    }
    if(lastOp.length===0)      //first number is being entered
    {
        num1 += btn.innerHTML;
        display.innerHTML = num1;
    }
    else //if(num2 === '')      //number op number
    {
        num2 += btn.innerHTML;
        display.innerHTML = num2;
    }
    });
});

//add click eventListener to operators
op.forEach(function(btn){
    btn.addEventListener('click', function() {
        if(num1!='' && num2 !=''){
            num1 = compute(num1,num2,lastOp).toString();
            num2 = '';
            display.innerHTML=btn.innerHTML;
            lastOp = btn.innerHTML;
        }
        else{
        lastOp = btn.innerHTML;
        display.innerHTML=btn.innerHTML;
        console.log(lastOp);
        }
    });
});

clear.addEventListener('click', clr);

equal.addEventListener('click', function(){
    show(compute(num1,num2,lastOp));
    num1 = compute(num1,num2,lastOp).toString();
    num2 = '';
    lastOp = '';
})

