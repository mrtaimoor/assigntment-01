//! Chapter 09, 10 & 11 | User Input and Conditional Statements

//? 1.  Write a program to take “city” name as input from user. If user enters “Karachi”,welcome the user like this: “Welcome to city of lights”
var cityName = prompt("Enter city name: ");
if (cityName === "Karachi" || cityName === "karachi") {
  alert("Welcome to City of lights.");
} else {
  alert(`Welcome to City ${cityName}!`);
}

//? 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter gender: ");
if (gender === "male" || gender === "Male") {
  alert("Good Morning Sir.");
} else if (gender === "female" || gender === "Female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Enter a Valid gender");
}

/* 
?3. Write a program to take input color of road traffic signal from the user & show the message according to this table:  
Signal color  Message 
Red Must Stop 
Yellow Ready to move 
Green Move now 
*/
var color = prompt("Enter a valid color");
if (color === "Red" || color === "red") {
  alert("Must Stop");
} else if (color === "Yellow" || color === "yellow") {
  alert("Ready to move");
} else if (color === "Green" || color === "green") {
  alert("Move Now");
} else {
  alert("Enter a Valid color");
}

//? 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuel = parseFloat(prompt("Enter a valid fuel number"));
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("Fuel is set, to go!");
}

/* 
?5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
a. var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}

b. var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 

c. var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 

d. var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 

e. if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
} 

f. if("car" < "cat"){ 
alert("car is smaller than cat"); 
} 
*/

// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); // This message is displayed because condition is true
}

// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); // This message is not displayed because condition is false
}

// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true"); // This message is displayed because condition is true
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true"); // This message is displayed because condition is true
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals"); // This message is displayed because condition is true
}

// e.
if (true) {
  alert("True"); // This message is displayed because condition is true
}

if (false) {
  alert("False"); // This message is Not displayed because condition is false
}

// f.
if ("car" < "cat") {
  alert("car is smaller than cat"); // This message is displayed because condition is true because check ine ine letter car kaa r phly ata hai and cat ka t baad mai ata hai alphabat mai
}

//?  6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade remarks like:

document.write("<br /> <h1>Mark Sheet</h1><br />");
var sub1Marks = parseInt(prompt("Enter your marks for 1st subject."));
var sub2Marks = parseInt(prompt("Enter your marks for 2nd subject."));
var sub3Marks = parseInt(prompt("Enter your marks for 3rd subject."));
var totalMarks = 300;
var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var percentage = Math.round((obtainedMarks / totalMarks) * 100);
document.write(`<br />Total Marks: ${totalMarks}`);
document.write(`<br />Obtained Marks: ${obtainedMarks}`);
document.write(`<br /> Percentage: ${percentage}%`);
if (percentage >= 80) {
  document.write(`<br /> Grade: A - One`);
  document.write(`<br /> Remarks: Excellent`);
} else if (percentage >= 70) {
  document.write(`<br /> Grade: A`);
  document.write(`<br /> Remarks: Good`);
} else if (percentage >= 60) {
  document.write(`<br /> Grade: B`);
  document.write(`<br /> Remarks: You need to improve`);
} else {
  document.write(`<br /> Grade: Fail`);
  document.write(`<br /> Remarks: Sorry`);
}

/* 
?7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
a. If user guesses the same number, show “Bingo! Correct 
answer”. 
b. If the guessed number +1 is the secret number, show 
“Close enough to the correct answer”.  
*/
var secretNumber = 1;
var userGuess = parseInt(prompt("Enter Guess the secret number"));
if (secretNumber === userGuess) {
  alert("Bingo! Correct answer");
}
if (secretNumber === userGuess + 1) {
  alert("Close enough to the correct answer");
}

//? 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = parseInt(prompt("Enter a number to check divisible by 3 or not:"));
if (number % 3 === 0) {
  alert("Your given number is divisible by 3");
} else {
  alert("Your given number is not divisible by 3");
}

//? 9. Write a program that checks whether the given input is an even number or an odd number.
var number = parseInt(prompt("Enter a number to check Even or Odd:"));
if (number % 2 === 0) {
  alert("Your given number is Even");
} else {
  alert("Your given number is odd");
}

/* 
?10. Write a program that takes temperature as input and 
shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.” 
c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.”  
*/
var temperature = parseInt(prompt("Enter temperature"));
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's Weather is so Cool.");
} else {
  alert("Please enter a valid temperature.");
}

/*
?11. Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input: 
a. First number 
b. Second number 
c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user.   
*/
var num1 = parseInt(prompt("Enter a first number"));
var num2 = parseInt(prompt("Enter a second number"));
var op = prompt(
  "Enter a operations(+,-,*, / & %) for your choice for performing calculation"
);
if (op === "+") {
  alert(`Your Addition: ${num1} ${op} ${num2} = ${num1 + num2}`);
} else if (op === "-") {
  alert(`Your Subtraction: ${num1} ${op} ${num2} = ${num1 - num2}`);
} else if (op === "x") {
  alert(`Your Multiply: ${num1} ${op} ${num2} = ${num1 * num2}`);
} else if (op === "/") {
  alert(`Your Divide: ${num1} ${op} ${num2} = ${num1 / num2}`);
} else if (op === "%") {
  alert(`Your Remainder: ${num1} ${op} ${num2} = ${num1 % num2}`);
} else {
  alert("Enter a valid Operations");
}
