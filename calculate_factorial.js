// Write a function that takes a non-negative integer as input and calculates its factorial. 
// The factorial of a number is the product of all positive integers less than or equal to that number. 
// For example, the factorial of 5 (written as 5!) is calculated as 5 * 4 * 3 * 2 * 1, which equals 120.

function calculateFactorial(num){
    let total = 1;
    while(num > 0){
        console.log(num)
        total = total * num;
        num--
    }
    return total
};

console.log(calculateFactorial(5));
