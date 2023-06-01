// Return the number of vowels found in a string

function countVowels(str){
    let count = 0
    let vowels = /[aeiou]/i
    for(let i = 0; i < str.length; i++){
        if(vowels.test(str[i])){
            count++
        }
    }
    return count;
}

console.log(countVowels("teeoomnr"))
console.log(countVowels("tote"))
console.log(countVowels("sssshhhhh"))





