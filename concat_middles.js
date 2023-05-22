// Return a string in the order of middles being added sequencially
// "phone" => "o" , "phne" => "oh" , "pne" => "ohn" , "pe" => "ohne" , "p" => "ohnep"

function concatMiddles(str) {
    let middlesString = "";
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      let middleIdx = Math.floor((left + right) / 2);
      let middleVal = str[middleIdx];
      middlesString += middleVal;
  
      if (left === middleIdx) {
        left++;
      } else if (right === middleIdx) {
        right--;
      } else {
        left++;
        right--;
      }
    }
  
    return middlesString;
  }
  
  console.log(concatMiddles("phones"));  // Output: "ohne"
  