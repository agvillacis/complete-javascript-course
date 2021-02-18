/*variables and data types */


let age = 30;
age = 31;


const birthyear = 1991;
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


/*

x = y = (3 + 5) * 4 - 6;
console.log(x);
console.log(y);


x = x * 2;
x *= 2;
console.log(x);

x = x + 1;
x += 1;
x++;
console.log(x);


*/
/*
var markBMI, markMass, markHeight,
johnBMI, johnMass, johnHeight, markHigherBool;

markMass = 105;
markHeight = 72;

johnMass = 120;
johnHeight = 65;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

markHigherBool = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? ",
markHigherBool);

console.log("Mark's BMI: ", markBMI);
console.log("John's BMI: ", johnBMI);
*/

/*if else*/

/*
var firstName = 'John';
var civilStatus = 'single';
var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon.');
}


var markBMI, markMass, markHeight,
johnBMI, johnMass, johnHeight, markHigherBool;

markMass = 105;
markHeight = 72;

johnMass = 120;
johnHeight = 65;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}*/
//markHigherBool = markBMI > johnBMI;

//console.log("Is Mark's BMI higher than John's? ",
//markHigherBool);

/***** Boolean logic ****/
/*
var firstName = 'John';
var age = 22;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //between 13 and 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
}
else {
  console.log(firstName + ' is a man.');
}
*/

/*******The Ternary Operator and Switch statements ******/
/*
var firstName = 'John';
var age = 32;

//age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice'

console.log(firstName + ' drinks ' + drink);


if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}


var job = 'instructor';


switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}


switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
    break;
  default:
    console.log(firstName + ' is a man');
}
*/

/*******Truthy and Falsy values and equality operators **********/

// falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values
/*
var height = 23;

if (height || height === 0) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has not been defined.');
}

//== does type coercion
//Equality operators

if (height == '23') {
  console.log('The == operator does type coercion!');
}
*/



/******Coding challenge 2 *****/

/*
var teamJohnAvg = (600 + 120 + 103) / 3;
var teamMikeAvg = (50 + 120 + 103) / 3;
var teamMaryAvg = (600 + 120 + 103) / 3;

if (teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
  console.log('John\'s team has a better average of ' + teamJohnAvg);
}
else if (teamJohnAvg < teamMikeAvg && teamMaryAvg < teamMikeAvg) {
  console.log('Mike\'s team has a better average of ' + teamMikeAvg);
}
else if (teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg) {
  console.log('Mary\'s team has a bette average of ' + teamMaryAvg);
} else if (teamMaryAvg === teamMikeAvg && teamMaryAvg > teamJohnAvg) {
  console.log('Mary and Mike have a better average of ' + teamMaryAvg);
} else if (teamMaryAvg === teamJohnAvg && teamMaryAvg > teamMikeAvg) {
  console.log('Mary and John have a better average of ' + teamMaryAvg);
} else if (teamMikeAvg === teamJohnAvg && teamMikeAvg > teamMaryAvg) {
  console.log('Mike and John have a better average of ' + teamMikeAvg);
}
else {
  console.log('All team\'s have an average of ' + teamMikeAvg);
}
*/

/*******Functions*********/
/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.');
  }
  else {
    console.log(firstName + ' is already retired.');
  }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mary');
yearsUntilRetirement(1970, 'Jane');

*/

/****Functions Statements and Expressions******/
//Function declaration
//function whatDoYouDo(job, firstName) {}


//Function expression
/*
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives kids to school.';
    case 'designer':
      return firstName + ' designs code for kids.';
    default:
      return firstName + ' has a generic job.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('retired', 'Jane'));
*/

/********Arrays*******/
//initialize new array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); //this one is not used a lot
console.log(names[0]);
console.log(names.length);

//mutate array data
names[1] = 'Ben';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

//different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);
*/

/**Coding challenge #3**/

/*
function tipCalculator(amount) {
  switch(true) {
    case amount < 50:
      return amount * .2;
    case amount > 200:
      return amount * .1;
    default:
      return amount * .15;
  }
}

var tips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)];
var finalAmount = [124 + tips[0], 48 + tips[1], 268 + tips[2]];
console.log(tips);
console.log(finalAmount);
*/

/****Objects and properties****/

//Order matters in arrays but not in objects.

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// }; //curly braces are object literals
//
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);
//
// john.job = 'designer';
// console.log(john);
//
// var jane = new Object(); //another way of creating object
// jane.name = 'Jane';
// jane.birthYear = 1989;
// jane['lastName'] = 'Smith';
//
// console.log(jane['lastName']);

/******Objects and Methods*******/


// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1993,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() { //this is a function expression
//     this.age = 2018 - this.birthYear;
//   }
// }; //curly braces are object literals
//
//
// john.calcAge();
//
// console.log(john.age);


/****Coding challenge 4*****/

//
// var mark = {
//   firstName: 'Mark',
//   lastName: 'Acosta',
//   mass: '100',
//   height: '58',
//   calcBMI: function() {
//     return this.BMI = this.mass / (this.height * this.height);
//   }
// }
//
//
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: '10',
//   height: '58',
//   calcBMI: function() {
//     return this.BMI = this.mass / (this.height * this.height);
//   }
// }
//
// mark.calcBMI();
// john.calcBMI();
//
// if (mark.BMI > john.BMI) {
//   console.log(mark.BMI + ' with mark as the winner');
// }
// else if (john.BMI > mark.BMI) {
//   console.log(john.BMI + ' with john as the winner');
// }
// else {
//   console.log(john.BMI + ' with both of them as tied')
// }

/******Loops and Iterations*****/

// i = 0, 0 < 10, so log i to console. Then i = i + 1;
// i = 1, 1 < 10, so log i to console. Then i = i + 1;

// var john = ['John', 'Smith', 1990, 'designer', false];
//
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
//
// //while loop equivalent of for loop above
// var i = 0;
// while(i < john.length) {
//   console.log(john[i]);
//   i++;
// }


//continue and break Statements
//continue exits current iteration of loop and moves on
//break completely breaks out of the loop


// var john = ['John', 'Smith', 1990, 'designer', false];
//
// for (var i = john.length - 1; i >= 0; i--) {
// //  if (typeof john[i] !== 'boolean') continue;
//     console.log(john[i]);
// }


/***Coding challenge #5****/

// var johnFamily = {
//   bills: [124, 48, 268, 180, 42],
//   tips: [],
//   final: [],
//   tipCalc: function() {
//     for(var i = 0; i < this.bills.length; i++) {
//       switch (true) {
//         case this.bills[i] < 50:
//           this.tips[i] = this.bills[i] * 0.2;
//           this.final[i] = this.tips[i] + this.bills[i];
//           break;
//         case this.bills[i] > 200:
//           this.tips[i] = this.bills[i] * 0.1;
//           this.final[i] = this.tips[i] + this.bills[i];
//           break;
//         default:
//           this.tips[i] = this.bills[i] * 0.15;
//           this.final[i] = this.tips[i] + this.bills[i];
//       }
//     }
//   }
// }
//
// johnFamily.tipCalc();
// console.log(johnFamily.bills);
// console.log(johnFamily.tips);
// console.log(johnFamily.final);
//
//
// var markFamily = {
//   bills: [77, 475, 110, 45],
//   tips: [],
//   final: [],
//   tipCalc: function() {
//     for(var i = 0; i < this.bills.length; i++) {
//       switch (true) {
//         case this.bills[i] < 100:
//           this.tips[i] = this.bills[i] * 0.2;
//           this.final[i] = this.tips[i] + this.bills[i];
//           break;
//         case this.bills[i] > 300:
//           this.tips[i] = this.bills[i] * 0.25;
//           this.final[i] = this.tips[i] + this.bills[i];
//           break;
//         default:
//           this.tips[i] = this.bills[i] * 0.1;
//           this.final[i] = this.tips[i] + this.bills[i];
//       }
//     }
//   }
// }
//
// markFamily.tipCalc();
//
// console.log(markFamily.bills);
// console.log(markFamily.tips);
// console.log(markFamily.final);
// function averageTip(tips) {
//   var avg = 0;
//   for(var i = 0; i < tips.length; i++) {
//     avg += tips[i];
//   }
//   return avg / tips.length;
// }
//
// console.log(averageTip(johnFamily.tips), averageTip(markFamily.tips));



















