// return the correct word found in the seed (random group of character)

// words = [glasses, motorbike, baseball, forests]
// ftpormbeglstqumqztiiss
// forests

let words = ["glasses", "motorbike", "baseball", "forests"]
let seed = "ftpormbeglstqumqztiiss"

function findInSeed(words, seed){
    let obj = {};
    for(let i = 0; i < seed.length; i++){
        let key = seed[i]
        if(obj[key]){
            obj[key]++
        }
        else {
            obj[key] = 1
        }
    }

    for (let string = 0; string < words.length; string++) {
        let copiedObj = { ...obj };
        
        for (let j = 0; j < words[string].length; j++) {
            if (copiedObj[words[string][j]]) {
                if (copiedObj[words[string][j]] === 0) {
                    return false;
                }
                copiedObj[words[string][j]]--;
            } else {
                return false;
            }
        }
        return words[string];
    }
    return false;
}

console.log(findInSeed(words, seed))