//! Chapter 12 & 13 | IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
//? 1.  Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- (A=65, Z=90){uPPERcASE}, a=97, z=122).
var ch = prompt("Enter a character (number or string)");
if (ch >= "A" && ch <= "Z") {
  document.write(ch + " is an UpperCase character <br>");
} else if (ch >= "a" && ch <= "z") {
  document.write(ch + " is an LowerCase character <br>");
} else {
  document.write(ch + " is not an aplhabetic character <br>");
}

//? 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var num1 = parseInt(prompt("Enter a first number"));
var num2 = parseInt(prompt("Enter a second number"));
if (num1 > num2) {
  alert(`${num1} is greater than ${num2} so the larger number is ${num1}`);
} else if (num1 < num2) {
  alert(`${num1} is less than ${num2} so the larger number is ${num2}`);
} else if (num1 === num2) {
  alert(`${num1} is equal to ${num2}`);
} else {
  alert("Enter a valid number");
}

//? 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var Number = parseInt(prompt("Enter a number"));
if (Number > 0) {
  alert(`Your Entered Number ${Number} is Positive!`);
} else if (Number < 0) {
  alert(`Your Entered Number ${Number} is Negitive!`);
} else {
  alert(`Your Entered Number ${Number} is not a number or Zero!`);
}

//? 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var vowel = prompt("Please enter any vowel character.");
if (
  vowel === "a" ||
  vowel === "e" ||
  vowel === "i" ||
  vowel === "o" ||
  vowel === "u" ||
  vowel === "A" ||
  vowel === "E" ||
  vowel === "I" ||
  vowel === "O" ||
  vowel === "U"
) {
  alert("True");
} else {
  alert("False");
}

/* 
? 5. Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.   Validate the two passwords: 
  i. Check if user has entered password. If not, then give message “ Please enter your password” 
  ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
*/
var corrPassword = "taimoor";
var password = prompt("Please enter your password");
if (password === "") {
  alert("Please enter your password");
} else if (password === corrPassword || password === "Taimoor") {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

//? 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
} else {
  greeting = "Good evening";
  alert(greeting);
}

//? 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time = parseInt(prompt("Enter time:"));
if (time >= 0000 && time < 1200) {
  alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evining!");
} else if (time >= 2100 && time < 2359) {
  alert("Good Night!");
} else {
  alert("Bad Time!");
}