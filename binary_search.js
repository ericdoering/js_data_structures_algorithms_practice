// Create a binary search function

function binarySearch(arr, val){
 
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {

      let middleIdx = Math.floor((left + right) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < val) {
        left = middleIdx + 1;

      } else if (middleVal > val) {
        right = middleIdx - 1;

      } else {
        return middleIdx;
      }
    }
    
    return -1;
};

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4));


