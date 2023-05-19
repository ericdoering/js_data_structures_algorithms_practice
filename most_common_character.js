// return the most common character found in a string

function mostCommonCharacter(str){
    // first set an object to store counts of characters
    let countChar = {};
    // run a for loop through the string
    for(let i = 0; i < str.length; i++){
        // let char be set to the value at each index
        let char = str[i]
        // if the character is seen in the objcet increment by 1
        if(countChar[char]){
            countChar[char]++
        }
        // if not seen set it to one for the first occurence of that character
        else{
            countChar[char] = 1
        }
    }
    // set the variable biggest to be an object of the max key, value pari
    let biggest = -1, number;
    // loop through the keys of the countChar object
    for(let key in countChar){
        // if the number of a character is bigger than the biggest value set that to the new maximum
        if(countChar[key] > biggest){
            biggest = countChar[key];
            number = key;
        }
    }
    return number
}


console.log(mostCommonCharacter("aaaaeeeitttttttop"))