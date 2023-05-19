// create a function that will swap the keys and values of an object

let object = {
    "A": "one",
    "B": "two",
    "C": "three",
    "D": "four",
};

function swapKeyAndValue(obj){
    let swappedObject = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            swappedObject[obj[key]] = key;
        }
    }
    return swappedObject;
};

console.log(swapKeyAndValue(object));

