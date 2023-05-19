// Find and return a dublicate number in an array

function findDublicate(arr){
    let storeVal = {};
    for(let i = 0; i < arr.length; i++){
        let val = arr[i]
        if(storeVal[val]){
            return val
        }
        else {
            storeVal[val] = 1
        }
    }
};

console.log(findDublicate([1,2,3,4,4,5,6]));
console.log(findDublicate([0,4,7,6,3,2,9,9,1]));