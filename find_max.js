// Return the maximum value from an unsorted array

function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
};


console.log(findMax([3,5,4,7,8,22,55,23,2,89]));
console.log(findMax([5,32,16,77,46,24]));