// Given a string of parentheses, return true if all are matched with their respective closed parentheses

function validParentheses(str){
    let arr = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "{" || str[i] === "["){
            arr.push(str[i])
        }
        if(str[i] === ")" || str[i] === "}" || str[i] === "]"){
            arr.pop(str[i])
        }
        console.log(arr)
    }
    return arr.length === 0;
};

console.log(validParentheses("(){}[]"))
console.log(validParentheses("(){[]"))
