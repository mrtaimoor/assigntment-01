//! Chapter 3 | Variables For Numbers

//? 1.  Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 21;
alert("Your age is: " + age);

//? 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitTime = 14;
alert("You have visited this site " + visitTime + " times.");

//? 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2000;
document.write("My birth year is " + birthYear + " years.");


/*
? 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
a. Visitor’s name 
b. Product title 
c. Quantity i.e. how many products a visitor wants to 
order Show the following message in your browser: “John 
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.  
*/
var visitorName = "Syed Taimoor";
var Quantity = 5;
document.write(`<br /><b>${visitorName}</b> ordered <b>${Quantity} T-shirt(s)</b> on XYZ Clothing store.`);
