
// Reverse a string
function reverseString(word){
    let reverseWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        reverseWord = reverseWord.concat(word[i])
    }
    return reverseWord
};

console.log(reverseString("goose"));
console.log(reverseString("MEDULA OBLENGADA"));
console.log(reverseString(""));
