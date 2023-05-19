// Filter out all strings from an array

function filterStrings(arr){
    const stringArr = [];
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === "string"){
        stringArr.push(arr[i])
      }
    }
    return stringArr;
};

console.log(filterStrings([1,"E","OPOP",3,44,true,null,"hi"]))