//! Chapter 4 | Variables Names Legal & Illegal Variables.

//? 1.  Declare 3 variables in one statement.
var name, age, DOB;

//? 2. Declare 5 legal & 5 illegal variable names.
var name, age, DOB, myFather_name, _my121IDNo, $names; // This all are legal variables names.

// var 121Idno., my%is,  &Dell, .toMe, ok men; //! This all are Illegal variables names.

//? 3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable namescan only contain ______, ______, ______ and ______.  For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case ________ e) Variable names should not be JS _________

document.write("<h3>Rules for naming JS variables.</h3>");
document.write("<br />Variables names can only contain numbers, $ and underscore for example $name, _name or name and $my_1stVariable"
);
document.write("<br /> Variables must begin with a letters, $ or _ For example $name, _name or name"
);
document.write("<br />  Variable names are case sensitive.");
document.write("<br />  Variable names should not be JS keywords.");