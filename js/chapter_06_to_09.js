//! Chapter 06, 07, 08 & 09 | Math Expressions Part 2

//? 1.  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write("Result <br />");
document.write(`The value of a is: ${a} <br />`);
document.write("---------------------------- <br />");

document.write(`<br />The value of ++a is: ${++a}`);
document.write(`<br />Now the value of a is: ${a} <br />`);
document.write(`<br />The value of a++ is: ${a++}`);
document.write(`<br />Now the value of a is: ${a} <br />`);
document.write(`<br />The value of --a is: ${--a}`);
document.write(`<br />Now the value of a is: ${a} <br />`);
document.write(`<br />The value of a-- is: ${a--}`);
document.write(`<br />Now the value of a is: ${a} <br />`);

/* 
? 2. What will be the output in variables a, b & result after execution of the following script: 

var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 

Explain the output at each stage: 
--a;                       // 1
--a - --b;                //  1 - 0 = 1
--a - --b + ++b;         //   1 - 0 + 1 = 2
--a - --b + ++b + b--;  //    1 - 0 + 1 + 1 = 3
*/
var a = 2,
  b = 1;
document.write(`<br /> a is ${a}`);
document.write(`<br /> b is ${b}`);

var result = --a - --b + ++b + b--; // 1 - 0 + 1 + 1 = 3
document.write(`<br /> result is ${result}<br />`); // 3

//? 3. Write a program that takes input a name from user & greet the user.
// var userName = prompt("Enter your name: ");
// alert(`Welcome, ${userName}!`);

//? 4.  Not Given in your assignment file

//? 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var multiplicationTable = parseInt(
//   prompt("Enter a number to print your multiplication table", 5)
// );

// document.write(`<br />${multiplicationTable} x 1 = ${multiplicationTable * 1}`);
// document.write(`<br />${multiplicationTable} x 2 = ${multiplicationTable * 2}`);
// document.write(`<br />${multiplicationTable} x 3 = ${multiplicationTable * 3}`);
// document.write(`<br />${multiplicationTable} x 4 = ${multiplicationTable * 4}`);
// document.write(`<br />${multiplicationTable} x 5 = ${multiplicationTable * 5}`);
// document.write(`<br />${multiplicationTable} x 6 = ${multiplicationTable * 6}`);
// document.write(`<br />${multiplicationTable} x 7 = ${multiplicationTable * 7}`);
// document.write(`<br />${multiplicationTable} x 8 = ${multiplicationTable * 8}`);
// document.write(`<br />${multiplicationTable} x 9 = ${multiplicationTable * 9}`);
// document.write(
//   `<br />${multiplicationTable} x 10 = ${multiplicationTable * 10} <br />`
// );

/* 
? 6. Take 
a) Take three subjects name from user and store them in 3 different variables.
b) Total marks for each subject is 100, store it in another variable. 
c) Take obtained marks for first subject from user and stored it in different variable. 
d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
*/
document.write("<br/><h1>Result Card</h1><br />");
var sub1 = prompt("Enter subject 1 Name:", "English");
var sub2 = prompt("Enter subject 2 Name:", "Maths");
var sub3 = prompt("Enter subject 3 Name:", "Urdu");
var totalMarksEachSub = 100;
var obtainedMarksSub1 = parseInt(
  prompt(
    `Enter Obtained Marks of Your ${sub1}, for total marks 100 out of?`,
    90
  )
);
var obtainedMarksSub2 = parseInt(
  prompt(
    `Enter Obtained Marks of Your ${sub2}, for total marks 100 out of?`,
    90
  )
);
var obtainedMarksSub3 = parseInt(
  prompt(
    `Enter Obtained Marks of Your ${sub3}, for total marks 100 out of?`,
    90
  )
);

// Result
var totalMarks = totalMarksEachSub + totalMarksEachSub + totalMarksEachSub;
var totalObtainedMarks =
  obtainedMarksSub1 + obtainedMarksSub2 + obtainedMarksSub3;
var perceSub1 = Math.round((obtainedMarksSub1 / totalMarksEachSub) * 100);
var perceSub2 = Math.round((obtainedMarksSub2 / totalMarksEachSub) * 100);
var perceSub3 = Math.round((obtainedMarksSub3 / totalMarksEachSub) * 100);
var percentage = Math.round((totalObtainedMarks / totalMarks) * 100);

document.write(`
<table border="2" cellspacing="2" cellpadding="10px">
  <tr> 
    <th>SUBJECTS</th>
    <th>TOTAL MARKS</th>
    <th>OBTAINED MARKS</th>
    <th>PERCENTAGE</th>
  </tr>
    
  <tr> 
    <td>${sub1}</td>
    <td>${totalMarksEachSub}</td>
    <td>${obtainedMarksSub1}</td>
    <td>${perceSub1}%</td>
    </tr>
    
    <tr> 
    <td>Maths</td>
    <td>${totalMarksEachSub}</td>
    <td>${obtainedMarksSub2}</td>
    <td>${perceSub2}%</td>
    </tr>
    
    <tr> 
    <td>Urdu</td>
    <td>${totalMarksEachSub}</td>
    <td>${obtainedMarksSub3}</td>
    <td>${perceSub3}%</td>
    </tr>
    
    <tr> 
    <td></td>
    <td><b>${totalMarks}</b></td>
    <td><b>${totalObtainedMarks}</b></td>
    <td>${percentage}%</td>
  </tr>
</table>
`);
//?7.  Not Given in your assignment file
