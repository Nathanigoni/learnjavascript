// // Learnig javascript basics
// console.log("Hello, World!");


// /* Data types and variables:
// undefined, null, boolean, string, symbol, number, and object*/

// var myName = "james";

// myName = 8 ;

// const pi = 3.14;

// let isLearning = true;

// // Storing values with the assignment operator
// var a; // declare variable
// var b = 2; // declare and assign value
// console.log(b); //always use console.log to see output
// a = 7; // assign value
// b = a; // assign value of a to b
// console.log(a); //always use console.log to see output

// // Initializing variables with the assignment operator
// var  a = 5;
// var  b = 2;
// var  c = "I am a"; 

// //do not change code below this line
// a = a + 1;
// b = b + 5;
// c = c + " String!";
// console.log(a, b, c);

//Case sensitivity in variables
// var Study;
// var ICEman;
// var RinGO;

// //Assingments
// STudy = 10
// iceMaAN = "O am ice man"
// rINgO = 9000 // this code isnt goint to work because of case sensitivity in variables

// Adding Numbers

// var sum = 10 + 10;
// console.log(sum);
// var difference = 45 - 33;
// console.log(difference);
// var product = 8 * 10;
// console.log(product);
// var quotient = 66 / 33;
// console.log(quotient);

// Incrementing a Number
// var myVar = 87;
// myVar++;
// console.log(myVar);
// // Decrementing a Number
// myVar--;
// console.log(myVar);

// // Decimal Numbers
// var ourDecimal = 5.7;
// var myDecimal = 2.5;

// // // Multiplying Decimals
// var product = 2.0 * 2.5;
// console.log(product);

// // // Dividing Decimals
// var quotient = 4.4 / 2.0;
// console.log(quotient);

// // Finding a Remainder
// var remainder;
// remainder = 11 % 3;
// console.log(remainder);

// Compound Assignment with Augmented Addition
// var a = 3;
// a += 12;
// console.log(a); // a = a + 12

// // Compound Assignment with Augmented Subtraction
// var b = 11;
// b -= 6;
// console.log(b); // b = b - 6

// // Compound Assignment with Augmented Multiplication
// var c = 5;
// c *= 5;
// console.log(c); // c = c * 5

// // Compound Assignment with Augmented Division
// var d = 48;
// d /= 12;
// console.log(d); // d = d / 12

//Declaring String Variables
// var myFirstName = "John";
// var myLastName = "Doe";

// // Escaping Literal Quotes in Strings
// var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr);

// // Quoting Strings with Single Quotes
// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr); // use single quotes to avoid escaping double quotes

// // Escape Sequences in Strings
/*****
 CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 *****/
// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// // Concatenating Strings with Plus Operator
// var myStr = "This is the start. " + "This is the end.";
// console.log(myStr);

// // Concatenating Strings with the Plus Equals Operator
// var myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr);
 

// // Constructing Strings with Variables
// var myName = "John";
// var myStr = "My name is " + myName + " and I am well!";
// console.log(myStr);

// // Appending Variables to Strings
// var someAdjective = "awesome!";
// var myStr = "Learning to code is ";
// myStr += someAdjective;
// console.log(myStr);

// // Finding Length of a String
// var firstName = "John";
// var lastName = "Doe";
// var fullName = firstName + " " + lastName;
// console.log(fullName.length);

// // Bracket Notation to Find First Character in String
// var firstLetterOfFirstName = "";
// var firstName = "John";
// firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName);

// // String Immutability
// var myStr = "Jello World";
// myStr[0] = "H"; // this won't work because strings are immutable
// myStr = "Hello World"; // this will work
// console.log(myStr);

// // Bracket Notation to Find Nth Character in String
// var firstName = "John";
// var thirdLetterOfFirstName = firstName[1];
// console.log(thirdLetterOfFirstName);

// // Bracket Notation to Find Last Character in String
// var firstName = "John";
// var lastLetterOfFirstName = firstName[firstName.length - 1];
// console.log(lastLetterOfFirstName);

// // Bracket Notation to Find Nth-to-Last Character in String
// var firstName = "John";
// var secondToLastLetterOfFirstName = firstName[firstName.length - 2];
// console.log(secondToLastLetterOfFirstName);

// Word Blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
//   return result;
// }console.log(wordBlanks("dog", "big", "ran", "quickly"));

// // Store Multiple Values in one Variable using JavaScript Arrays
// var myArray = ["John", 23];
// console.log(myArray);
// // Nesting Arrays
// var myArray = [["John", 23], ["cat", 2]];
// console.log(myArray);    
// // Accessing Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[2];
console.log(myData);