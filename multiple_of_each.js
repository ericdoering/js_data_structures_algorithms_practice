// Given a string, return a new string with each of the characters multiplied by a number provided in the function
// (try, 5) -> tttttrrrrryyyyy

function multipleOfEach(str, num){
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i].repeat(num);
    }
    return result;
};

console.log(multipleOfEach("er", 2))
console.log(multipleOfEach("Fried", 5))