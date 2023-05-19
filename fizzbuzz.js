// Write fizzbuzz which will print fizz when divisible by 3, buzz when divisible by 5 and fizzbuzz when divisable by 3 & 5.

function fizzBuzz(val){
    for(let i = 1; i <= val; i++){
        if(i % 5 === 0 && i % 3 === 0){
            console.log("fizzbuzz")
        }
        else if(i % 5 === 0){
            console.log("buzz")
        }
        else if(i % 3 === 0){
            console.log("fizz")
        }
        else{
            console.log(i)
        }
    }
    return
};

console.log(fizzBuzz(30));