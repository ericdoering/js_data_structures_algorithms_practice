// Merge two sorted arrays

function mergeArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            mergedArray.push(arr1[i])
            i++;
        }
        else {
            mergedArray.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
    }

    while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
    }

  return mergedArray;
}

console.log(mergeArrays([2,4,6],[3,5,7,8]));
console.log(mergeArrays([1,15,23,44],[1,5,58]));