// Check if two strings of text are anagrams
// example: "part" "tarp"

function checkAnagram(str1, str2){
    let obj = {};

    for(let i = 0; i < str1.length; i++){
      let chr = str1[i];
      if(obj[chr]){
        obj[chr]++;
      }
      else {
        obj[chr] = 1;
      }
    }

    for(let i = 0; i < str2.length; i++){
      let chr = str2[i];
      if(obj[chr]){
        obj[chr]--;
      }
      else {
        obj[chr] = 1;
      }
    }

    for(let key in obj){
      if(obj[key] !== 0){
        return false;
      }
    }
    return true;
  }
  
  console.log(checkAnagram("star", "rats")); 
  console.log(checkAnagram("cats", "dogs")); 
  console.log(checkAnagram("silent", "listen")); 
  