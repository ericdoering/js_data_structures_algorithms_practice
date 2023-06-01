// Given a value have a function print the values up until that value

// function printFibonacci(val){
//     let total = 0;
//     let num1 = 0;
//     let num2 = 1;
//     while(total <= val){
//         console.log(total)
//         num1 = num2;
//         num2 = total;
//         total = num1 + num2
//     }
//     return
// };

// console.log(printFibonacci(100));

// be able to handle all data types
// only allow a number to be utilized by the function
// return all numbers in the fibonacci sequence up until that point

// first I will check if the inputed value is a number
// if not return false
// then create a while loop in which we continally add the total up until it reaches are given value
// console.log at a point in which the newly added value is returned

function fibonacci(val){
    if(isNaN(val)) return false
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

console.log(fibonacci(30));
console.log(fibonacci("dskfs"))