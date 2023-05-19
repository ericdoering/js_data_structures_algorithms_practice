// Return the first and second highest values from an array (secondHighest, Highest)

function twoHighest(arr){
    let largestArr = [];
    let largest = 0;
    let secondLargest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    largestArr.push(secondLargest, largest)
    return largestArr
};


console.log(twoHighest([1,4,55,67,23,8,222]));
console.log(twoHighest([76,34,2,687,44,2]));
console.log(twoHighest([300,50,25,1,0]));