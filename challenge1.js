// 1. Given an array of strings, return only the strings that have exactly 4 characters.

// - set up an array with strings. Then using a for statement, print out only the strings
//   that have exactly === 4 characters.


var food = ["tacos", "ham", "cheese", "fish", "meat", "chili", "milk"];
// the food variable stores and array of food. The array has 7 elements.
for (var i = 0; i < food.length; i++) {
// setting up this for statement to go through the length of the array, checking each element
    if(food[i].length === 4) {
    console.log(food[i])
    }
}
// if the element goes through the code and comes out true, meaning it has a length strictly
// equal to 4, it will print. If fale, it will go to the next element until it reaches the end of the array.



// Start with an array of strings with a mix of uppercase and lowercase letters. 
// Print every word in all lowercase letters.


// We again will start with an array of strings. Our end goal is to have ALl LEtTeRS PRIntIng tO 
// lOWErcAse. 
// There will be no if statement since we want all strings of the array to print.

// First we start off by making an array of strings
// We will set up our for statement for each element to go through our code.
// Since we want all our elements to print, we need to make a code that changes each element to 
// lowercase and prints it out till it reaches the end of the array, which I googled how to.

var hockeyTeams = ["Avalanche", "JETS", "KinGS", "SHArkS", "blUEs"];
for(var i =0; i < hockeyTeams.length; i++) {
    console.log(hockeyTeams[i].toLowerCase())
}


// 1. Given an array of strings, return only the words that begin with the letter "t".

// We will start with an array of string that has multiple elements and some beginning with the letter "t"
// This will require a check to return elements *only* beginning with the letter "t" which requires an if statement


var things = ["phone", "tent", "towel", "paper", "stamp", "house", "tank"];
for (var i = 0; i < things.length; i++){
  if(things[i].startsWith("t")) {
    console.log(things[i])
  }
}
// With 7 elements being checked, they are all being put through the code and only printing if the return true.
// Meaning they do have start with a "t"
// As I did not know what to code to find that, I googled "words that start with, javascript mdn"