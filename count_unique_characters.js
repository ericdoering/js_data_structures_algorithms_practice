// Return an object that has each unique character in a string and the count for each character
//example eeaatiii will be {e : 2, a : 2, t : 1, i : 3}

function uniqueCharacters(str){
    let charObject = {};
    for(let i = 0; i < str.length; i++){
        let chr = str[i];
        if(charObject[chr]){
            charObject[chr]++;
        }
        else {
            charObject[chr] = 1;
        }
    }
    return charObject
};

console.log(uniqueCharacters("eeeaayyyyyoiop"))