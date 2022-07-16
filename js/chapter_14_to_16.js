//! Chapter 14, 15 & 16 | ARRAYS

//? 1.  Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];

//? 2. Declare an empty array using JS object notation to store student names in future.
var studentNamess = new Array();

//? 3. Declare and initialize a strings array.
var fruitsNames = ["Apple", "Orange", "Graphs", "Banana"];

//? 4.  Declare and initialize a numbers array.
var Ages = [23, 45, 60, 78, 90, 11];

//? 5.  Declare and initialize a boolean array.
var boolean = [true, false, false, true, false, false];

//? 6. Declare and initialize a mixed array.
var mixed = [1, "taimoor", null, true, -1, 0.45, false, undefined, "", " ", 0];

//? 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var degress = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<br />Education Qualifications:<br />");
document.write("<br />1) " + degress[0]);
document.write("<br />2) " + degress[1]);
document.write("<br />3) " + degress[2]);
document.write("<br />4) " + degress[3]);
document.write("<br />5) " + degress[4]);
document.write("<br />6) " + degress[5]);
document.write("<br />7) " + degress[6]);
document.write("<br />8) " + degress[7]);

//? 8. Write a program to store 3 student names in an array.Take another array to store  score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentNames = ["Taimoor", "Ali", "Ahmed"];
var studentScore = [450, 239, 400];
document.write(
  `<br /> Score of ${studentNames[0]} is ${studentScore[0]}. Percentage ${
    (studentScore[0] / 500) * 100
  }%`
);
document.write(
  `<br /> Score of ${studentNames[1]} is ${studentScore[1]}. Percentage ${
    (studentScore[1] / 500) * 100
  }%`
);
document.write(
  `<br /> Score of ${studentNames[2]} is ${studentScore[2]}. Percentage ${
    (studentScore[2] / 500) * 100
  }%`
);

/* 
?9. Initialize an array with color names. Display the array elements in your browser. 
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 

c. Add two more color to the beginning of the array. Display the updated array in your browser. 

d. Delete the first color in the array. Display the updated array in your browser. 

e. Delete the last color in the array. Display the updated array in your browser.

f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your 
browser. 

g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.Display the updated array in your browser.
*/
var colorNames = ["Red", "Green", "Yellow", "Blue", "Magenta", "Cyan", "White"];
document.write("<br />Color Names is: " + colorNames);
// a)
var colorAdds = prompt("What color he/she wants to adds in color names?");
colorNames.unshift(colorAdds);
document.write("<br />Color Names is After Adds Start: " + colorNames);

//b)
var colorAddsEnd = prompt("What color he/she wants to adds in color names?");
colorNames.push(colorAddsEnd);
document.write("<br />Color Names is After Adds End: " + colorNames);

//c)
colorNames.unshift("Vilot", "Purple");
document.write("<br />Color Names is After Adds Start: " + colorNames);

//d)
colorNames.shift();
document.write("<br />Color Names is After shift: " + colorNames);

//e)
colorNames.pop();
document.write("<br />Color Names is After pop: " + colorNames);

//f)
var addsColorIndex = parseInt(
  prompt("Which index he/she wants to add a color.")
);
var addsColorName = prompt("Add a color Name.");
colorNames[addsColorIndex] = addsColorName;
document.write("<br/> Color Names After Manualy Adds: " + colorNames);

//g)
var colorIndex = parseInt(
  prompt("Which index he/she wants to delete color(s)")
);
var colorsDelete = parseInt(prompt("how many colors he/she wants to delete"));
colorNames.splice(colorIndex, colorsDelete);
document.write("<br/> Color Names After Delete Manualy: " + colorNames);

//? 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scores = [123, 112, 342, 221, 500, 102, 442, 100, 400];
document.write("<br/> Scores Of Students:" + scores);
scores.sort();
document.write("<br/> Ordered Scores Of Students:" + scores);

//? 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selected Cities array.
var cityNames = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Hyadrabad",
  "Sindh",
  "Faislabad",
];
var selectedCityNames = cityNames.slice(0, 3);
document.write("<br />Selected Cilties is: " + selectedCityNames);

//? 12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
var arr = [" This ", " is ", " my ", " cat "];
document.write("<br /> Array: " + arr);
var str = arr.join(arr);
document.write("<br /> String: " + str);

//? 13.  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<br /> <br />Devices: " + devices);
document.write("<br /> <br />Out: " + devices[0]);
document.write("<br /> Out: " + devices[1]);
document.write("<br /> Out: " + devices[2]);
document.write("<br /> Out: " + devices[3]);

//? 14.  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<br /> <br />Devices: " + devices);
document.write("<br /> <br /> Out: " + devices[3]);
document.write("<br /> Out: " + devices[2]);
document.write("<br /> Out: " + devices[1]);
document.write("<br /> Out: " + devices[0]);

//? 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
var Phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`<br /><br /> 
<select> 
  <option>${Phones[0]}</option>
  <option>${Phones[1]}</option>
  <option>${Phones[2]}</option>
  <option>${Phones[3]}</option>
  <option>${Phones[4]}</option>
  <option>${Phones[5]}</option>
</select>
`);
