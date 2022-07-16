//! Chapter 5 | Math Expression.
//? 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = 12,
  num2 = 10;

var Add = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${Add} <br />`);

//? 2. Repeat task1 for subtraction, multiplication, division & modulus.
// Subtraction:
var Subtraction = num1 - num2;
document.write(
  `<br />Subtraction of ${num1} and ${num2} is ${Subtraction} <br />`
);

//Multiplication
var Multiplication = num1 * num2;
document.write(
  `Multiplication of ${num1} and ${num2} is ${Multiplication} <br />`
);

// Division
var Division = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${Division} <br />`);

// modulus
var modulus = num1 % num2;
document.write(`Modulus of ${num1} and ${num2} is ${modulus} <br />`);

/* 
?3. Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value 
after increment is: 6”. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like “Value after addition is: 13”. 
i. Decrement the variable. 
j. Show the value of variable in your browser like “Value after decrement is: 12”. 
k. Show the remainder after dividing the variable’s value 
by 3.  
l. Output : “The remainder is : 0”.  
*/
var value;
document.write(`<br />Value after variable declaration is ${value} <br />`);

value = 5;
document.write(`Initial value is: ${value} <br />`);

value++; // value = value + 1
document.write(`Value after increment is: ${value} <br />`);

value = value + 7;
document.write(`Value after addition is: ${value} <br />`);

value--;
document.write(`Value after decrement is: ${value} <br />`);

value = value % 3;
document.write(`The remainder is is: ${value} <br />`);

//? 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var movieTicketPrice = 600;
var movieTickets = 5;
document.write(
  `<br />Total cost to buy ${movieTickets} tickets to a movie is: ${
    movieTicketPrice * movieTickets
  }PKR<br />`
);

//? 5. Write a script to display multiplication table of any number in your browser. E.g
var multiplicationTable = 5;
document.write(`<br />${multiplicationTable} x 1 = ${multiplicationTable * 1}`);
document.write(`<br />${multiplicationTable} x 2 = ${multiplicationTable * 2}`);
document.write(`<br />${multiplicationTable} x 3 = ${multiplicationTable * 3}`);
document.write(`<br />${multiplicationTable} x 4 = ${multiplicationTable * 4}`);
document.write(`<br />${multiplicationTable} x 5 = ${multiplicationTable * 5}`);
document.write(`<br />${multiplicationTable} x 6 = ${multiplicationTable * 6}`);
document.write(`<br />${multiplicationTable} x 7 = ${multiplicationTable * 7}`);
document.write(`<br />${multiplicationTable} x 8 = ${multiplicationTable * 8}`);
document.write(`<br />${multiplicationTable} x 9 = ${multiplicationTable * 9}`);
document.write(
  `<br />${multiplicationTable} x 10 = ${multiplicationTable * 10} <br />`
);

/* 
?6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
a.  Store a Celsius temperature into a variable. 
b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
c.  Now store a Fahrenheit temperature into a variable. 
d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae:  
*/
var celsiusTemperature = 20;
var fahrenheitTemperature = 90;

// Convert Fahrenheit to Celsius:
var FahrenheitToCelsius = (celsiusTemperature * 9) / 5 + 32;
document.write(
  `<br />Fahrenheit to Celsius: ${fahrenheitTemperature}oF is ${FahrenheitToCelsius}oC`
);

// Convert Celsius to Fahrenheit:
var CelsiusToFahrenheit = ((fahrenheitTemperature - 32) * 5) / 9;
document.write(
  `<br />Celcius To Fahrenheit: ${celsiusTemperature}oC is ${CelsiusToFahrenheit}oF`
);

/*
? 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website Store the following in variables 
a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges Compute the total cost & show the receipt in your browser.  
*/
var item1Price = 650;
var item2Price = 100;
var quantityOfitem1 = 3;
var quantityOfitem2 = 7;
var ShippingCost = 100;

document.write("<h1>Shopping Cart</h1>");
document.write(`<br />Price of item 1 is ${item1Price}`);
document.write(`<br />Quantity of item 1 is ${quantityOfitem1}`);

document.write(`<br />Price of item 2 is ${item2Price}`);
document.write(`<br />Quantity of item 2 is ${quantityOfitem2}`);

var totalCost =
  item1Price * quantityOfitem1 + item2Price * quantityOfitem2 + ShippingCost;
document.write(`<br />Total cost of your order is ${totalCost}PKR`);

//? 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var marksObtained = 804;

document.write("<br /><h1>Mark Sheet</h1><br />");

var percentage = (marksObtained / totalMarks) * 100;
document.write(`Percentage: ${percentage}%`);

//? 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br /> <h1>Currency in PKR</h1><br />");

var exchangeRateIn1USD = 104.8 * 10;
var SaudiRiyal = 28 * 25;

var totalCurrency = exchangeRateIn1USD + SaudiRiyal;
document.write(`Total Currency in PKR: ${totalCurrency}<br />`);

/* 
?10.  Write a program to initialize a variable with some number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2
Perform all calculations in a single expression  
*/
var num = 10;
var result = num + (5 * 10) / 2;

document.write(`<br />Total Calculatio is ${result}<br />`);

/* 
?11.  The Age Calculator: Forgot how old someone is? Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values. 
Output them to the screen like so: “They are either NN or NN 
years old”. 
*/
document.write("<br /> <h1>Age Calculator</h1> <br />");
var curYear = 2022;
var birthYear = 2002;

var yourAge = curYear - birthYear;
document.write(`<br /> Your Age is ${yourAge} <br />`);

/* 
?12.  The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable. 
b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
*/
document.write("<br /> <h1>The Geometrizer</h1> <br />");
var radius = 20;
var circumferenceOfCircle = 2 * Math.PI * radius;
var areaOfCircle = radius * radius * Math.PI;
document.write(`Radius of a circle: ${radius}`);
document.write(`<br />The circumference is: ${circumferenceOfCircle}`);
document.write(`<br /> Area of a circle: ${areaOfCircle}<br />`);

/* 
?13.  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of your life. 
Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.  
 */
document.write("<br /> <h1>The Lifetime Supply Calculator</h1> <br />");

var favoriteSnack = "Supper Chocolate";
var currentAge = 21;
var maxAge = 65;
var amntPerDay = 3;

document.write(`<br />You will need 150 ${favoriteSnack} to last you until the ripe old age of ${maxAge}`);