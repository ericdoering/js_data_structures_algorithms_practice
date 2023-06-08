
function narcassisticNumber(){
    const narcassisticNumbers = [];

    for(let i = 0; i <= 999; i++){
        let sum = 0;
        let number = i;
        const digits = String(number).split("");
        

        for(let j = 0; j < digits.length; j++){
            
            sum += Math.pow(Number(digits[j]), digits.length);
            
        }

        if(sum === i){
            narcassisticNumbers.push(i)
        }
    }

    return narcassisticNumbers
};


console.log(narcassisticNumber())