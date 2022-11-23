let numbers = document.querySelectorAll('.number');
let input = document.querySelector('input');
let container = document.querySelector('.container');
let del = document.querySelector('.delete');
let clear = document.querySelector('.clear');
let operations = document.querySelectorAll('.operation')
let temp1;
let temp2;
let result;
let operand;
let math = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x,y) {return x * y},
    '/': function (x,y) {return x / y}
};

let bool = false;


for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => {
        if(bool){
            input.value = numbers[i].textContent;
            bool = false;
        } else {
            input.value += numbers[i].textContent;
        }
    })
}

del.addEventListener('click', () => {
    input.value = '';
    temp1 = undefined;
    temp2 = undefined;
    operand = undefined;
})

clear.addEventListener('click', () => {
    let num = input.value;
    input.value = num.slice(0, num.length - 1);
})

for(let i = 0; i < operations.length; i++ ){
    operations[i].addEventListener('click', () => {
        if(operations[i].textContent === '=') {
            temp2 = Number(input.value)
            input.value = math[operand](temp1, temp2);
            temp1 =  undefined;
            temp2 = undefined
            bool = true;
        }else if(temp1 === undefined){
            temp1 = Number(input.value);
            operand = operations[i].textContent;
            bool = true;
        } else if(temp2 === undefined){
            temp2 = Number(input.value);
            temp1 = math[operand](temp1, temp2);
            operand = operations[i].textContent;
            input.value = temp1;
            temp2 = undefined;
            bool = true;
        }

        console.log(temp1)
        console.log(temp2)
        console.log(operand)
    })

}

