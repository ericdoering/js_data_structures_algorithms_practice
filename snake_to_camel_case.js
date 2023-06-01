

function snakeToCamel(str){
    let finalString = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] === "_"){
            i += 1
            finalString += str[i].toUpperCase()
        }
        else {
            finalString += str[i]
        }
    }
    return finalString;
};

console.log(snakeToCamel("visual_studio_code"))