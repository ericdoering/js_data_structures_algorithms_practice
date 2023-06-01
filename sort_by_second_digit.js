// Given triple digit numbers, sort them in ascending order of the 2nd digit only
// 424, 568, 211, 935 -> 211, 424, 935, 568

function sortSecondDigit(arr){
    const length = arr.length;

    for(let i = 0; i < length - 1; i++){
        for(let j = 0; j < length - 1 - i; j++){
            const current = arr[j];
            const next = arr[j + 1];
            
            const secondDigitCurrent = Math.floor((current % 100) / 10);
            const secondDigitNext = Math.floor((next % 100) / 10);


            if(secondDigitCurrent > secondDigitNext){
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }
    return arr
};

console.log(sortSecondDigit([154, 299, 362, 717, 448]));
console.log(sortSecondDigit([689, 354, 123, 677, 909, 113, 587]));