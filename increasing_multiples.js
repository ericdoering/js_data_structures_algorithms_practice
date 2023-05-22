// Given a string and a value print the sting in which each letter increases in multiples up until it reaches the value given

function increasingMultiples(str, mult){
    let i = 0;
    let j = 1
    let concatStr = ""
    while(i < mult){
        if(mult > str.length){
            return console.log("multiple exceeds number of characters.")
        }
        concatStr += str[i].repeat(j)
        i++
        j++
    }
    return concatStr
};

console.log(increasingMultiples("stars", 5))
console.log(increasingMultiples("baseball", 8))
console.log(increasingMultiples("compounding", 11))
console.log(increasingMultiples("car", 5))

