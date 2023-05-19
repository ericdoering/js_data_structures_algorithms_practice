
// Reverse an array

function reverseArray(arr){
    revArray = [];
    for(let i = 0; i < arr.length; i++){
        revArray.unshift(arr[i])
    }
    return revArray
};

console.log(reverseArray([3,4,5,6,7]))

