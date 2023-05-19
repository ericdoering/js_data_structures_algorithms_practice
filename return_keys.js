// Given an object return all the keys of the object

function returnKeys(obj){
        const result = [];
        for (let key in obj) {
          if (obj[key]) {
            result.push(key);
          }
        }
        return result;
};

console.log(returnKeys({"color": "red", "shape": "circle", "size": "large"}))
console.log(returnKeys({"cat": "Mijo", "dog": "Eddie", "hamster": "Greg"}))