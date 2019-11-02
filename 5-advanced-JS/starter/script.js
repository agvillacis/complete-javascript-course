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

function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);

retirementUS(1990);

//retirement(66)(1990);

var retirementGermany = retirement(65);
retirementGermany(1993);

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

function interviewQuestion(job) {
  var designerString = ', can you please explain what UX design is?';
  var teacherString = 'What subject do you teach, ';
  var genericString = ', what do you do?';

  return function(name) {
    if (job === 'designer') {
      console.log(name + designerString);
    } else if (job === 'teacher') {
      console.log(teacherString + name + '?');
    } else {
      console.log('Hello' + name + genericString );
    }
  }
}


var teacher = interviewQuestion('teacher');
teacher('John');
