// Given a value have a function print the values up until that value

function printFibonacci(val){
    let total = 0;
    let num1 = 0;
    let num2 = 1;
    while(total <= val){
        console.log(total)
        num1 = num2;
        num2 = total;
        total = num1 + num2
    }
    return
};

console.log(printFibonacci(100));