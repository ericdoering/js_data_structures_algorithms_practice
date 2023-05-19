// Given an array and value check which combination of array indexes equal the intended value

function twoSum(arr, val){
    let returnIndex = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === val){
                returnIndex.push(i);
                returnIndex.push(j);
            }
        }
    }
    return returnIndex;
};

console.log(twoSum([2,5,9,3,1], 10));
console.log(twoSum([3,4,8,7,2,7,9,1], 17));