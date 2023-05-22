// Return the largest prime number of the value given

function largestPrimeNumber(number){

    let divisor = 2;
    while(number > 1){
        if(number % divisor === 0){
            number /= divisor;
        }
        else {
            divisor++
        }
    }
    console.log(divisor)
};

console.log(largestPrimeNumber(22));