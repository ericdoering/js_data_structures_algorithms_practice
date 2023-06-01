

function halfAreVowels(str){
    let vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    console.log(count)
    if(count > (str.length / 2)){
        return true
    }
    else {
        return false
    }
};


console.log(halfAreVowels("aaeiiesst"));
console.log(halfAreVowels("ootmpqqr"));