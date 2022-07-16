//! Chapter 17, 18, 19 & 20 | ARRAYS AND LOOP

//? 1.  Declare and initialize an empty multidimensional array. (Array of arrays)
var multiArray = [[]];

//? 2. Declare and initialize a multidimensional array representing the following matrix:
var multidimensionalArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

//? 3. Write a program to print numeric counting from 1 to 10.
document.write("<br /> <h1>Counting from 1 to 10 is:</h1>");
for (var i = 1; i <= 10; i++) {
  document.write(`${i} <br/>`);
}

//? 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var n = parseInt(prompt("Enter a number to show its multiplication table"));
var len = parseInt(prompt("Enter length multiplication table"));
document.write(`<h1>Multiplication table of: ${n}</h1>`);
document.write(`Length: ${len}`);
for (var i = 1; i <= len; i++) {
  document.write(`<br/> ${n} x ${i} = ${n * i}`);
}

//? 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(`<br />${fruits[i]}`);
}
document.write(`<br />`);
for (var i = 0; i < fruits.length; i++) {
  document.write(`<br />Element at index ${i} is ${fruits[i]}`);
}

/* 
?6. Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k  
*/

// a)
document.write("<br/><h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(`${i}, `);
}

// b)
document.write("<br/><h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.write(`${i}, `);
}

// c)
document.write("<br/><h3>Even:</h3>");
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i}, `);
  }
}

// d)
document.write("<br/><h3>Odd:</h3>");
for (var i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    document.write(`${i}, `);
  }
}

// e)
document.write("<br/><h3>Series:</h3>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i}k, `);
  }
}

//? 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
//! Check this in your teacher
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItems = prompt(
  "Welcome to ABC Bakery. what do you want to order sir/ma'am?",
  "cookie"
);
for (var i = 0; i < searchItems.length; i++) {
  if (A[i] === searchItems) {
    document.write(
      `<br />${searchItems} is <b>avaliable</b> at index ${i} in our bakery`
    );
  } else {
    document.write(
      `<br />We are Sorry, ${searchItems} is <b>not avaliable</b> in our bakery`
    );
  }
}

//? 8. Write a program to identify the largest number in the given array.
//! Check this in your teacher
var largest = [24, 53, 78, 91, 12];
document.write(`<br /> Array Items: ${largest} `);
for (var i = 0; i < largest.length; i++) {
  if (largest[i] > largest[i + 1]) {
    document.write("<br />The largest Number is: " + largest[i]);
  }
}

//? 9. Write a program to identify the smallest number in the given array. A = [24, 53,78, 91, 12]
//! Check this in your teacher
var arr = [14, 53, 78, 91, 12];
var smallest = arr[0];
document.write(`<br /> Array Items: ${arr} `);
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
    document.write("<br />The smallest Number is: " + smallest);
  }
}
document.write("<br />");

//? 10. Write a program to print multiples of 5 ranging 1 to 100.
var multiPlies;
for (var i = 1; i <= 20; i++) {
  multiPlies = i * 5;
  document.write(`${multiPlies}, `);
}
