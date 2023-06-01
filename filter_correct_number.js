// Given an array of numbers and a value filter out all array numbers that don't include that number

function correctNumberFilter(arr, num) {
    let correctArray = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].toString().length; j++) {
        if (arr[i].toString()[j] === num.toString()) {
          correctArray.push(arr[i]);
          break; // Break out of the inner loop if the number contains the given digit
        }
      }
    }
    return correctArray;
  }

console.log(correctNumberFilter([33,577,43,36,44,9090,3,12,73], 3));
console.log(correctNumberFilter([234,12,78,1,654,55,32,231,6754,111,789,9,14], 1))



