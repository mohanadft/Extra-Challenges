// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  let arrOfVowelLetters = ["a", "i", "o", "u", "e"];
  let countOfVowelLetters = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "a":
      case "i":
      case "o":
      case "e":
      case "u":
        countOfVowelLetters++;
        break;
    }
  }
  return countOfVowelLetters;
};
