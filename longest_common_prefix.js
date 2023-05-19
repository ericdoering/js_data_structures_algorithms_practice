// return the longest common prefix

function longestPrefix(arrayOfStrings){
    if(!arrayOfStrings.length) return "";
    // loop through the first word
    for(let i = 0; i < arrayOfStrings[0].length; i++){
        // Then loop through the rest of the words
        for(let j = 1; j < arrayOfStrings.length; j++){
            // compare the characters of each string
            if(arrayOfStrings[0][i] !== arrayOfStrings[j][i]){
                //if they dont equal each other break the loop and slice the characters that were the same
                return arrayOfStrings[0].slice(0,i);
            }
        }
    }
    // if all of them equal each other return the whole first string
    return arrayOfStrings[0];
};


console.log(longestPrefix(["arrive", "arrange", "arrow"]));
console.log(longestPrefix(["leaving", "leaf", "leaning","learning"]));
console.log(longestPrefix(["12345", "12345", "12345"]));
console.log(longestPrefix(["", "", ""]));