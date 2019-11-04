// Function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };
//
// //function constructors start with capital letter
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person.prototype.calculateAge = function () {
//   console.log(2016 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
//
// var john = new Person('John', 1990, 'teacher');
//
// john.calculateAge();
//
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

//The prototype chain in the console

//do this by writing out the john object in the console from the code above

//Creating Objects: Object.create

// var personProto = {
//   calculateAge: function() {
//     console.log(2016 - this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// var jane = Object.create(personProto,
// {
//   name: {value: 'Jane'},
//   yearOfBirth: {value: 1990},
//   job: {value: 'designer'}
// });


//The difference between Object.create and function constructor
//Object.create builds an object that inherits directly from the one that we pass
//into the first argument
//Function constructor, newly created object inherits from the constructor prototype property

//Primitives vs. Objects




/*******Closures******/

// function retirement(retirementAge) {
//   var a = ' years left until retirement';
//   return function(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementUS = retirement(66);
//
// retirementUS(1990);
//
// //retirement(66)(1990);
//
// var retirementGermany = retirement(65);
// retirementGermany(1993);

/*
Closure summary
An inner function has always access to the variables
and parameters of its outer function, even after the outer
function as returned
*/

/*
  In the case above, when calling retirementUS function,
  we actually have the a and retirementAge variable still even
  though it has been popped off of the execution stack
*/


//interviewQuestion done but with using Closures

// function interviewQuestion(job) {
//   var designerString = ', can you please explain what UX design is?';
//   var teacherString = 'What subject do you teach, ';
//   var genericString = ', what do you do?';
//
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + designerString);
//     } else if (job === 'teacher') {
//       console.log(teacherString + name + '?');
//     } else {
//       console.log('Hello' + name + genericString );
//     }
//   }
// }
//
//
// var teacher = interviewQuestion('teacher');
// teacher('John');




/*****Bind, call and apply*****/

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
//     }
//   }
// };
//
// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };
//
// john.presentation('formal', 'morning');
//
// //this is called method borrowing. Since we are borrowing john's
// //presentation method
// john.presentation.call(emily, 'friendly', 'afternoon');


//apply method is the same but accepts arguments as an array
//won't work below because presentation doesn't expect to receive an array
//john.presentation.apply(emily, ['friendly', 'afternoon']);


//this bind below presets the argument for the presentation Function
//this presets the first argument to friendly and subsequent calls we just need to pass the second argument
//first argument in the bind is the this variable
// var johnFriendly = john.presentation.bind(john, 'friendly');
//
// johnFriendly('morning');
// johnFriendly('night');
//
// var emilyFormal = john.presentation.bind(emily, 'formal');
//
// emilyFormal('morning');
//
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2016 - el;
// }
//
// function isFullAge(limit, el) {
//   return el >= limit;
// }
//
// var ages = arrayCalc(years, calculateAge);
//
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

/*****Coding Challenge 7*****/


//function constructors start with capital letter
// var Question = function(question, answers, correctAnswer) {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
// }
//
// var programmingQ = new Question('How is programming?', ['tedious', 'boring', 'fun'], 2);
//
// var teacherQ = new Question('Who is the teacher?', ['John', 'Mark', 'Jonas'], 2);
//
// var lameQ = new Question('Who is lame?', ['fudge', 'smudge', 'budge'], 0);
//
// var allQuestions = [programmingQ, teacherQ, lameQ];
//
// function consoleLogQuestions () {
//   var randomIdx = Math.floor(Math.random() * 2 + 1);
//   console.log(allQuestions[randomIdx].question);
//   console.log('0: ' + allQuestions[randomIdx].answers[0]);
//   console.log('1: ' + allQuestions[randomIdx].answers[1]);
//   console.log('2: ' + allQuestions[randomIdx].answers[2]);
//   return allQuestions[randomIdx];
// }
//
// var question = consoleLogQuestions();
// var userAnswer = prompt(question.question);
//
// if (userAnswer == question.correctAnswer) {
//   console.log('That is correct, foo!');
// } else {
//   console.log('Try again, foo!');
// }



//expert level


var Question = function(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var programmingQ = new Question('How is programming?', ['tedious', 'boring', 'fun'], 2);

var teacherQ = new Question('Who is the teacher?', ['John', 'Mark', 'Jonas'], 2);

var lameQ = new Question('Who is lame?', ['fudge', 'smudge', 'budge'], 0);

var allQuestions = [programmingQ, teacherQ, lameQ];

function consoleLogQuestions () {
  var randomIdx = Math.floor(Math.random() * 2 + 1);
  console.log(allQuestions[randomIdx].question);
  console.log('0: ' + allQuestions[randomIdx].answers[0]);
  console.log('1: ' + allQuestions[randomIdx].answers[1]);
  console.log('2: ' + allQuestions[randomIdx].answers[2]);
  return allQuestions[randomIdx];
}


var userAnswer = '';
var score = 0;
var correct = true;
var question = '';
while (userAnswer != 'exit') {
  if (correct)
    question = consoleLogQuestions();
  userAnswer = prompt(question.question);

  if (userAnswer == question.correctAnswer) {
    console.log('That is correct, foo!');
    score++;
    console.log('Current score is: ' + score);
    correct = true;
  } else {
    console.log('Try again, foo!');
    correct = false;
  }

}
