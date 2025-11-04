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
// var myArray = [50, 60, 70];
// var myData = myArray[2];
// console.log(myData);
// // Modifying Array Data with Indexes
// var myArray = [18, 64, 99];
// myArray[0] = 45;
// console.log(myArray);
// // Accessing Multi-Dimensional Arrays with Indexes
// var myArray = [[1,2,3], [4,5,6],[7,8,9], [[10,11,12]], 13,14 ]
// var myData = myArray[3][0][1];
// console.log(myData);

// // Manipulating Arrays with push()
// var myArray = [["Stimpson", "J"], "cat"];
// myArray.push(["happy", "joy"]);
// console.log(myArray);

// // Manipulating Arrays with pop()
// var myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();
// console.log(myArray);
// console.log(removedFromMyArray);

// // Manipulating Arrays with shift()
// var myArray = [["John", 23], ["dog", 3]];
// var removedFromMyArray = myArray.shift();
// console.log(myArray);
// console.log(removedFromMyArray);

// // Manipulating Arrays with unshift()
// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift(); // remove first element
// myArray.unshift(["Paul", 35]); // add new first element
// console.log(myArray);

// Shopping List
// var myList = [["Chocolate Bar", 15], ["Milk", 2], ["Bread", 1], ["Eggs", 12], ["Apples", 6]];
// console.log(myList);

// // Write Reusable JavaScript with Functions
// function reusableFunction() {
//   console.log("Hi World");
// }
// reusableFunction();

// // Passing Values to Functions with Arguments
// function functionWithArgs(a, b) {
//   console.log(a + b);
// }
// functionWithArgs(5, 10);// Outputs 15

// // Global Scope and Functions
// var myGlobal = 10;

// function fun1() {
//   oopsGlobal = 5; // this variable is global because it is not declared with var, let, or const
// }
// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//       output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//       output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }

// fun1();
// fun2();


// Local Scope and Fucntions
// function myLocalScope(){
//   var myVar = 5;
//   console.log(myVar);
// }
// myLocalScope();



// Global vs. Local scope in Functions
// var outerWear = "T-Shirt";

// function myOutfit() {
//   var outerWear = "Sweater";

//   return outerWear;
// }

// console.log(myOutfit());
// console.log(outerWear);



// Return a value from a Function with Return
// function minusSeven(num) {
//   return num - 7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//   return num * 5;
// }
// console.log(timesFive(5));



// Understanding Undefined Value Returned from a Function
// function addFive() {
//   sum += 5;
// }
// console.log(addFive(2)) sum is undefined so its going to give you an error



// Assignment with a Returned Value
// var changed = 0;
// function change(num){
//   return (num + 5) /3;
// }
// changed = change(10)
// console.log(changed)

// var first = 0;
// function firstar(num){
//   return (num * 2) / 2;
// }
// first = firstar(10);
// console.log(first) 



// Stand in Line
// a queue is abstact data structure where items are kept in order and new data is kept at athe very end
// function nextInLine(arr, item){

//   arr.push(item)

//   return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
// console.log("After: " + JSON.stringify(testArr));



// Boolean Values
// function welcomeToBooleans(){
//   return false;
// }



// Use Conditional Logic with If Statements
// if is used to make decisions in code
// function ourTrueOrFalse(isitTrue){
//   if (isitTrue){
//     return "Yes, it is true";
//   }
//   return "No it's false"
// }

// function TrueOrFalse(wasThatTrue){
//   if (wasThatTrue){
//     return "Yes, that was true"
//   }
//   return "No, that was false"
// }
// console.log(TrueOrFalse(false))



// Comparison with the Equality Operator
// function testEqual(val){
//   if(val == 12) {
//     return "Equal";
//   }
//   return "Not Equal"
// }
// console.log(testEqual(10))



// Comparison with the Strict Equality Operator
// function testStrict(val){
//   if(val === 10){
//     return "Equal"
//   }
//   return "Not Equal"
// }
// console.log(testStrict(10));/



// Practice Comparing Different Values
// function compareEquality(a, b){
//   if (a == b) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(compareEquality(10, "10"))



// Comparison with the Inequality Operator
// function testNotEqual(val){
//   if (val != 10) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }
// console.log(testNotEqual(1));



// Comparison with the Strict Inequality Operator
// function testSrtictNotEqual(val){
//   if( val !== 17) {
//     return "Not Equal"
//   }
//   return "Equal"
// }
// console.log(testSrtictNotEqual("17"))



// Comparisons with the Logical and Opertator
  // function testGreaterThan(val){
  //   if (val > 100){
  //           return "Over 100";
  //   }
  //       if (val > 10){
  //           return "Over 10";
  //   }
  //   return "10 or under";

  // }
  // console.log(testGreaterThan(90))



  //Comparisons with the Greater Than or Equal To Operator
  //   function testGreaterThanOrEqual(val){
  //   if (val >= 100){
  //           return "100 or Over ";
  //   }
  //       if (val >= 10){
  //           return "10 or Over ";
  //   }
  //   return "10 or under";

  // }
  // console.log(testGreaterThanOrEqual(90))



// Comparisons with Lesser Than Operator
  //   function testLesserThan(val){
  //   if (val < 10){
  //           return "Under 10";
  //   }
  //       if (val < 100){
  //           return "Under 100";
  //   }
  //   return "10 or under";

  // }
  // console.log(testLesserThan())



// Comparisons with Lesser Than Operator Or Equal To Operator
  // function testLesserThanOrEqual(val){
  //   if (val <= 10){ 
  //           return "10 or Under";}

  //   return "10 or Higher";

  // }
  // console.log(testLesserThanOrEqual(1))



// Comparisons with the Logical And Operator
// function testLogicalAnd(val){
//   if (val <= 50 ){
//     if(val >= 25){
//       return "Yes"
//     }
//   }
//   return "No"
// }
// console.log(testLogicalAnd(30))
//AND
// function testLogicalAnd(val){
//   if (val <= 50 && val >= 25 ){
//       return "Yes"
//   }
//   return "No"
// }
// console.log(testLogicalAnd(30))



//Comparisons with the Logical Or Operator
// function testLogicalOr(val){
//   if (val < 10){
//     return "Outside";
//   }
//   if (val > 20) {
//     return "Outside"
//   }
//   return "Inside"
// }
// console.log(testLogicalOr(10))
//OR
// function testLogicalOr(val){
//   if (val < 10 || val > 20){
//     return "Outside";
//   }
//   return "Inside"
// }
// console.log(testLogicalOr(10))



//Else Statements
// function testElse(val){
//   var result = ""

//   if (val > 5){
//     result = "Bigger than 5";
//   } else{
//     result = "5 or smaller"
//   }
//   return result;
// }
// console.log(testElse(2))



//Else If statements
// function testElseIf(val) {
//   if (val > 10){
//     return "greater than 10";
//   }else if (val < 5){
//     return "smaller than 5";
//   }else return "Between 5 and 10";
// }
// console.log(testElseIf(7))



// Logical Order in If Else Statements
// function orderMyLogic(val) {
//   if (val < 5){
//     return "Less than 5";
//   }else if (val < 10){
//     return "less than 10";
//   }else return "Greater than or equal to 10";
// }
// console.log(orderMyLogic(10))



// Chaining If Else Statements
// function testSize(num){
//   if (num<5){
//     return "Tiny"
//   }else if(num<10){
//     return "Small"
//   }else if(num<15){
//     return "Medium"
//   }else if(num<20){
//     return "Large"
//   }else return "Huge"
// }
// console.log(testSize(50))



// Golf Code



// Switch Statements
// function caseInSwitch(val){
// switch(val){
//   case 1:
//     answer = "alpha";
//     break;
//   case 2:
//     answer = "beta"
//     break;
//   case 3:
//     answer = "gamma"
//     break;
//   case 4:
//     answer = "delta"
//     break; 

// }
// return answer;
// }
// console.log(caseInSwitch(4))



// Default Option in Switch Statments
// function switchOfStuff(val){
//   switch (val){
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break; 
//       default:
//         answer = "stuff"
//         break;
//     }
//       return answer;           
//   }
//   console.log(switchOfStuff(0))



// Mul tiple Identical Options in Switch Statements
// function sequentialSizes(val){
//   var answer = "";
//   switch(val){
//     case 1:
//     case 2:  
//     case 3:
//       answer = "low"
//       break;
//     case 4:
//     case 5:  
//     case 6:
//       answer = "Mid"
//       break;
//     case 7:
//     case 8:  
//     case 9:
//       answer = "High"
//       break              
//   }

//   return answer;
// }
// console.log(sequentialSizes(1))



// Replacing If Else Chanins with Switch
// function chainToSwitch(val){
//   var answer = "";


//   switch(val) {
//     case "bob":
//       answer = "Marley";
//       break;
//     case 42:
//       answer = "The Answer"
//       break;
//     case 1:
//       answer = "There is no #1"
//       break;
//     case 99:
//       answer = "Missed by this much!"
//       break;
//     case 7:
//       answer = "Ate Nine" 
//       break;  
//     }
//     return answer;
// }
// console.log(chainToSwitch(7))



// Returning Boolean Values from Fucntions
// function isLess(a, b){
//   return a < b;
// }
// console.log(isLess(10, 70));



// Returning Early Pattern from Functions
// function abTest(a, b){

//   if ( a < 0 || b < 0) {
//     return undefined
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
// }
// console.log(abTest(2,2))



// Counting Cards
var count = 0;

function cc (card) {
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
var holdbet = 'Holdbet'
if (count > 0) {
  holdbet = 'Bet'
}

  return count + " " + holdbet;
}

cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4)) 