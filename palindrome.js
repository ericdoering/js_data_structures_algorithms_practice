// Check string to see if it is a palindrome 

function palindrome(str){
    let left = 0;
    let right = str.length - 1
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
       left++
       right--
    } 
    return true
};

console.log(palindrome("racecar"))
console.log(palindrome("timer"))
console.log(palindrome("ratsstar"))