// Given an object return all values of the object

function returnValues(obj){
    const result = [];
    for (let key in obj) {
      if (obj[key]) {
        result.push(obj[key]);
      }
    }
    return result;
};

console.log(returnValues({"color": "red", "shape": "circle", "size": "large"}))
console.log(returnValues({"cat": "Mijo", "dog": "Eddie", "hamster": "Greg"}))