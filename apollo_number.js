
function apolloNumbers(){
    const apolloNumbers = [];

    for(let i = 1; i <= 999; i++){
        let sum = 0;
        let number = i

        while(number > 0){
            const digit = number % 10;
            sum += Math.pow(digit, 3);
            number = Math.floor(number / 10);
        }

        if(sum === i){
            apolloNumbers.push(i)
        }
    }

    return apolloNumbers
};

console.log(apolloNumbers())