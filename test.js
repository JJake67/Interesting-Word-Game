
const dictAPI = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// get the HTML fields
var input = document.getElementById("wordInput");
var output = document.getElementById("wordOutput");

// execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // if the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    //console.log(input.value);
    var palindrome = isPalindrome(input.value) 
    if (palindrome === true){
      output.innerHTML = "Palindrome";
    }else{
      output.innerHTML = "No ";
    }

    isRealWord(input.value).then(result => {
      output.innerHTML = "That's not even a word...";

    })
  }
});

function isPalindrome(word){
  let length = word.length;

  // if odd length, ignore the middle letter
  if (length % 2 != 0) {
    let midIndex = Math.trunc(length/2);
    word = word.substring(0,midIndex) + word.substring(midIndex+1,length);
  }

  // split into two halves 
  length = word.length;
  let midIndex = Math.trunc(length/2);

  let firstHalf = word.substring(0,midIndex);
  let secondHalf = word.substring(midIndex,length);

  // invert secondHalf to see if its the same as firstHalf 
  var splitStr = secondHalf.split("");
  var reverseArray = splitStr.reverse();
  var reverseSecondHalf = reverseArray.join("");

  // compare to see if palindromic
  if (firstHalf == reverseSecondHalf){
    return true;
  }
  return false;
}

async function isRealWord(word){
  result = await getWordData(word);
  if (result.status == 404){
    return result.data;
  } else {
    return result.data;
  }
}

async function getWordData(word) {
  const fullUrl = dictAPI + word;
  try {
    const response = await fetch(fullUrl);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
}



function isIsogram(word){

}
/* functions to make DEFFO
1 - palindrome : A word that reads the same forward and backward.
2 - isogram : A word in which no letter is repeated.
  2a - what is difference between isogram and heterogram
3 - Tautonym : A word or phrase composed of two identical parts.
4 - Abecedarian : A word where the letters are arranged in alphabetical order.
5 - Acronym : A word formed from the initial letters of other words
function 

6 - Not a word
7 - A number?
8 - A mess?
*/