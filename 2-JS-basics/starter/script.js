/*variables and data types */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28; //different datatype here

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

//can only name a variable with an underscore, dollar sign, or alpha char
/*
Five different datatypes: Number: (float), String, Boolean, Undefined, Null
*/

/*************
Variable mutation and type coercion

*/

//type coercion
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age); //works thanks to type coercion

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName +
   ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);
   
//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName +
   ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
   
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/***************
* Basic Operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators

ageJohn = 28;
ageMark  = 33;
var johnOlder = ageJohn < ageMark;

// typeof Operators
console.log(typeof johnOlder); //logs "boolean" to the console.

*/
/*
Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); //true

var ageJohn = now - yearJohn;
var ageMark = 35;

var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
console.log(x);



















