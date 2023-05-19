// Check if a sentence is a panagram (contains all letters in the alphabet)

function checkPanagram(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /[^a-z]/g;
    const cleanedStr = str.toLowerCase().replace(regex, "");
    const set = new Set(cleanedStr);
    return set.size === alphabet.length;
  }


  console.log(checkPanagram("The quick brown fox jumps over the lazy dog."))
  console.log(checkPanagram("The quick brown fox jumps over the lazy cow."))