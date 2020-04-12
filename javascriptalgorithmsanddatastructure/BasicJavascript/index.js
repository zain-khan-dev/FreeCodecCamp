//Comment your javascript code
//helloworld
/*Hello this is world */

/*Declare javascript variable*/

var myName;

/* Storing value with assignment operator*/
// Setup
var a;
var b = 2;

// Only change code below this line
var a=7;
var b=a;

//Initializing Variables with the Assignment Operator
var a=9;
/* Understanding Uninitialized Variables*/
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
/*Understanding Case Sensitivity in variables */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
/*Add two numbers with javascript */
var sum = 10 + 10;
/* Subtract one number from another with javascript*/
var difference = 45 - 33;
/*Multiply two numbers with javascript */
var product = 8 * 10;
/* Divide one number by another with javascript*/
var quotient = 66 / 33;
/* Increment a Number wuth Javascript*/
var myVar = 87;

// Only change code below this line
myVar++;
/* Decrement a number with javascript*/
var myVar = 11;

// Only change code below this line
myVar--;
/* Create a decimal numbers with javascript*/
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal=5.7;
/*Multiply two decimal with javascript */
var product = 2.0 * 2.5;
/* Divide one decimal by another with javascript*/
var quotient = 4.4 / 2.0; // Change this line
/* Finding a reminder in javascript*/
// Only change code below this line

var remainder=11%3;
/* Coumpound asinment with augmented addition*/
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9 ;
c += 7;
/* Compund assignment with augmented subtraction*/
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -=15;
c -=  1;
/* Compound Assignment With Augmented Multiplication*/
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;
/*compund assignment with augmented division */
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /=12;
b /=  4;
c /=  11;
/*Declare String Variables */
var myFirstName="zain"
var myLastName="khan";
/* Escaping literal quotes in string*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
/*Quoting Strings with Single Quotes */
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
/* Escaping Sequences in Strings*/
var myStr="FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
/* Concatening with plus operator*/
var myStr="This is the start. "+"This is the end."; // Only change this line
/*Concatening with the plus equals operator */
// Only change code below this line

var myStr="This is the first sentence. ";
myStr+="This is the second sentence."
/*Constructing string with variables */
// Only change code below this line
var myName="Zain khan";
var myStr="My name is "+myName+" and I am well!";
/*Appending variables to string */
// Change code below this line

var someAdjective="fun";
var myStr = "Learning to code is ";
myStr+=someAdjective;
/* Find the length of the string*/
// Change code below this line

var someAdjective="fun";
var myStr = "Learning to code is ";
myStr+=someAdjective;
/* Use Bracket Notation to Find the First Character in a String*/
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
/*Understanding string immutability */
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/*Use Bracket Notation to Find the Nth Character in a String */
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
/* Use Bracket Notation to Find the Last Character in a String*/
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
/*Use Bracket Notation to Find the Nth-to-Last Character in a String */
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
/* Word Blanks*/
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var hello=" "+myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb;
var wordBlanks = ""; // Change this line
// Only change code above this line
/* Store Multiple Values in one Variable using JavaScript Arrays*/
// Only change code below this line
var myArray = [];
myArray.push("hello");
myArray.push(1);
/*Nest one Array within Another Array */
// Only change code below this line
var myArray = [];
myArray.push(["helloworld"])
/*Access array data with indexes*/
// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData=myArray[0];
/*Modify Array Data With Indexes*/
// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0]=45;
/*Access Multi-Dimensional Arrays With Indexes */
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];
/* Manipulate Arrays With push()*/
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3]);
/*Manipulate Arrays With pop() */
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

var removedFromMyArray=myArray.pop();
/* Manipulate Arrays With shift()*/
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray=myArray.shift();
/*Manipulate Arrays With unshift() */
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);
/* Shopping List*/
var myList = [];
myList.push(["Chocolaate Bar",15]);
myList.push(["Chocolaate Bar",15]);
myList.push(["Chocolaate Bar",15]);
myList.push(["Chocolaate Bar",15]);
myList.push(["Chocolaate Bar",15]);
/*Write Reusable JavaScript with Functions */
function reusableFunction()
{
  console.log("Hi World");
}
reusableFunction();
/*Passing Values to Functions with Arguments*/
function functionWithArgs(a,b)
{
  console.log(a+b);

}
functionWithArgs(1,2);
/* Global scope and function*/
// Declare the myGlobal variable below this line
var oopsGlobal;
var myGlobal=10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
/*Local Scope and Functions */
function myLocalScope() {
  'use strict';

  // Only change code below this line
  var myVar=10;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
/*Global vs. Local Scope in Functions */
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear="sweater";

  // Only change code above this line
  return outerWear;
}
myOutfit();
/* Return a value from a function with Return*/
functiontimesFive(a)
{
  return 5*a;
}
/*Understanding Undefined Value returned from a Function */
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive()
{
  sum+=5;
}
// Only change code above this line

addThree();
addFive();
/*Assignment with a Returned Value*/
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);
/* Stand in Line*/
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item=arr.shift();
  return item;
  // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/*Understanding Boolean Value */
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item=arr.shift();
  return item;
  // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/*Use Conditional Logic with If Statements */
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue)
    return "Yes, that was true";
  return "No, that was false"

  // Only change code above this line

}
/*Comparison with equality operator */
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
/*Comparison with the Strict Equality Operator */
// Setup
function testStrict(val) {
  if (val===10) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
/*Practice comparing different values */
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
/*  Comparison with the Inequality Operator*/
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
/*Comparison with the Strict Inequality Operator */
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
/*Comparison with the Greater Than Operator */
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
/*Comparison with the Greater Than Or Equal To Operator */
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
/*Comparison with Less than operator*/
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
/* Comparison with the Less Than Or Equal To Operator */
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
/*Comparisons with the Logical And Operator */
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50&&val>=25) {
      return "Yes";
    }
  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
/*Comparison with logical or operator */
function testLogicalOr(val) {
  // Only change code below this line

  if (val>20||val<10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
/*Introducing Else Statements*/
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }
  else
    result = "5 or Smaller";

  // Only change code above this line
  return result;
}

testElse(4);
/*Introducing Else If Statements */
function testElseIf(val) {
  if (val > 10)
  {
    return "Greater than 10";
  }
  else if(val < 5)
  {
    return "Smaller than 5";
  }
  else
  {
    return "Between 5 and 10";
  }

}

testElseIf(7);
/*Logical Order in If Else Statement*/
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
/*Chaining If Else Statements*/
function testSize(num) {
  // Only change code below this line
  if(num<5)
    return "Tiny"
  else
  if(num<10)
    return "Small"
  else
  if(num<15)
    return "Medium"
  else
  if(num<20)
    return "Large"
  else
    return "Huge";
  // Only change code above this line
}

testSize(7);
/*Golf Code*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes==1)
    return "Hole-in-one!";
  else
  if(strokes<=par-2)
    return "Eagle";
  else
  if(strokes==par-1)
    return "Birdie";
  else
  if(strokes==par)
    return "Par";
  else
  if(strokes==par+1)
    return "Bogey";
  else
  if(strokes==par+2)
    return "Double Bogey";
  else
  return "Go Home!";
  // Only change code above this line
}

golfScore(5, 4);
/*Selecting from Many Options with Switch Statements*/
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val)
  {
    case 1:
    {
      answer="alpha"
      break;
    }
    case 2:
    {
      answer="beta"
      break;
    }
    case 3:
    {
      answer="gamma"
      break;
    }
    case 4:
    {
      answer="delta"
      break;
    }
  }
  // Only change code above this line
  return answer;
}
caseInSwitch(1);
/*Adding a Default Option in Switch Statements*/
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line

  switch(val)
  {
    case 'a':
    return "apple";
    case 'b':
    return "bird";
    case 'c':
    return "cat";
    default:
    return "stuff";
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/**/
