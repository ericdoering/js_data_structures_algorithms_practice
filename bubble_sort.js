// Implement Bubble sort

function bubbleSort(arr){
    let length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort([3,7,5,9,1,6,2]));
console.log(bubbleSort([4,4,4,6,6,6,2,2,2]));