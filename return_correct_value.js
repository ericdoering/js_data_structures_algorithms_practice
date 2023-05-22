// Search for a given key and if it is in the object return its value

function correctValue(obj, key){
    for(let i in obj){
        if(i === key){
            return obj[key]
        }
    }
    return false
};

console.log(correctValue({"red" : "ball", "blue": "disk", "green": "club"}, "blue"));
console.log(correctValue({"red" : "ball", "blue": "disk", "green": "club"}, "red"));
console.log(correctValue({"red" : "ball", "blue": "disk", "green": "club"}, "yellow"));