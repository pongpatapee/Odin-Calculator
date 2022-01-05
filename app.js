function add(a, b){return a + b;}
function sub(a, b){return a - b;}
function mul(a, b){return a * b;}
function div(a, b){return a / b;}

function operate(a, b, func){
    return func(a, b);
}

function updateDisplayVal(val){
    displayValue.innerText = val;
}

const displayValue = document.getElementById('curr-val');

//buttons
const numBtns = document.querySelectorAll('.num-btns');
const opBtns = document.querySelectorAll('.op-btns');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalBtn = document.getElementById('equal');

let value1 = '0';
let stack = [];
let operation = null;

numBtns.forEach(num => num.addEventListener('click', (e) => {
    let newDigit = e.target.innerText;
    if(value1 == '0' && newDigit != '.'){
        value1 = newDigit;
    } else {
        if (!(newDigit == '.' && value1.includes('.')) && value1.length <= 12) { 
            value1 += newDigit;
        }
    }
    updateDisplayVal(value1);
}));

opBtns.forEach(op => op.addEventListener('click', (e) => {
    switch(e.target.id){
        case 'add':
            operation = add;
            break;
        case 'sub':
            operation = sub;
            break;
        case 'mul':
            operation = mul;
            break;
        case 'div':
            operation = div;
            break;
    }

    if(stack.length == 0){
        stack.push(parseFloat(value1));
        value1 = '0';
        updateDisplayVal(value1);
    }
    else if(stack.length == 1){
        stack.push(parseFloat(value1));
        value1 = operate(stack[0], stack[1], operation);
        value1 = value1.toString();
        updateDisplayVal(value1);
    } else {
        // stack = [stack.reduce(operation, 0)];
    }

    console.log(stack);

}));

equalBtn.addEventListener('click', (e)=>{
    if(stack.length == 1){ 
        stack.push(parseFloat(value1));
        value1 = operate(stack[0], stack[1], operation);
        value1 = value1.toString();
        updateDisplayVal(value1);
    }
    console.log(stack);
});

clearBtn.onclick = (e)=>{
    stack = [];
    value1 = '0';
    updateDisplayVal(value1);
};

deleteBtn.onclick = (e)=>{
    if(value1.length > 1){
        value1 = value1.slice(0, value1.length - 1);
    } else {
        value1 = '0';   
    }
    updateDisplayVal(value1);
}

