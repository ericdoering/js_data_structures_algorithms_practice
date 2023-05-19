// Given a string, return a new string that removes all the duplicates

function removeDuplicates(str){
    let storeObj = {};
    let returnStr = "";
    for(let i = 0; i < str.length; i++){
        let key = str[i]
        if(!storeObj[key]){
            returnStr += key
            storeObj[key] = true
        }
    }
    return returnStr;
}

console.log(removeDuplicates("eeeaaiyuooo"));
console.log(removeDuplicates("ttttiiiiooowwwwnpr"));