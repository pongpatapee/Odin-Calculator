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
let numBtns = document.querySelectorAll('.num-btns');
let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('delete');

let value1 = '0';
let vlaue2 = '0';

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

clearBtn.onclick = (e)=>{
    value1 = '0';
    updateDisplayVal(value1);
};

deleteBtn.onclick = (e)=>{
    value1 = value1.slice(0, value1.length - 1);
    updateDisplayVal(value1);
}
