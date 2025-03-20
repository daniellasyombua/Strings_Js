// Extracting the last four characters
const word = "extravaganza";
const theLastFour = word.slice(-4);
console.log("The last four characters:");

// Insert eat at the fourth index
const food = "The quick fox jumped over the lazy dog";
const newFood = food.slice(0,4) + "eat" + food.slice(4);
console.log(newFood);

// Count how many times the following string appears in the string variable
const story ="The quick brown fox jumps over the lazy dog";
const y = story.toLowerCase();
let the = y.split("the").length -1;
let brown =y.split("brown").length -1;
console.log("The appears $the times");
console.log(" Brown appears $brown times");


// Find the following words from the following strings

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";

const findtheWord = (str, word) => str.includes(word);

const areIsPresent = findtheWord(string1, "are");
const SittingIsPresent = findtheWord(string2, "sitting");

console.log(`"are" is present: ${areIsPresent}`); 
console.log(`"sitting" is present: ${SittingIsPresent}`); 



// Convert the following strings into the specified format

// UpperCase
const upperCaseString = "wonderful".toUpperCase();
console.log(upperCaseString); // Output: "WONDERFUL"

// LowerCase
const lowerCaseString1 = "amazing".toLowerCase();
const lowerCaseString2 = "UndERneath".toLowerCase();
console.log(lowerCaseString1); 
console.log(lowerCaseString2); 

// Title Case
const toTitleCase = (str) => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
const titleCaseString = toTitleCase("A wonderful world");
console.log(titleCaseString); 