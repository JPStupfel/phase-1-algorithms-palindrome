function isPalindrome(word) {
  // Write your algorithm here


/* 
  Add your pseudocode here
*/

//create a variable that will turn to false if the palandrom test fails
let isPal = true

//for i in wordArray, if its ever not true that word[i] === word[-i], change isPal to false

for (i in word) {
  if (word[i] !== word[word.length -1 - i]) {isPal = false}
}

return isPal

}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
