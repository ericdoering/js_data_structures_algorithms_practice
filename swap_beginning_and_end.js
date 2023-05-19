// swap the beginning and end values on an array

// [1,2,3,4,5]
// 
function swapBeginningAndEnd(arr){
    let end = arr[arr.length - 1];
    let beginning = arr[0];
    arr.pop()
    arr.shift()
    arr.unshift(end)
    arr.push(beginning)
    return arr
};


console.log(swapBeginningAndEnd([1,2,3,4,5]));