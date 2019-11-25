/****Let and const****/

// ES5

// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);
//
// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// // name6 = 'Jane Miller'; //error because we tried to change const
// // console.log(name6);
//
// //let and const are blocked scoped while var is function scoped
//
// //ES5
// function driversLicense5(passedTest) {
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = '1990';
//
//
//   }
// console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
//
// }
//
//
//
// driversLicense5(true);


// ES6

// function driversLicense6(passedTest) {
//   if (passedTest) {
//     let firstName = 'John';
//     const yearOfBirth = '1990';
//
//
//   }
//   //does not work because let and const are block scoped
//   //only works when you define let in beginning outside of if statement
//   console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
// }

// function driversLicense6(passedTest) {
//   //console.log(firstName); //this gives error where as with var it will be undefined
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
// }
//
// driversLicense6(true);
//
//
// let i = 23;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
//
// console.log(i); //this prints 23 since it is block scoped
//with var i is 5 because it is not block scoped.



/*****Blocks and IIFEs*****/

//blocks are just done with curly braces like below
//es6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
//
// //console.log (a + b);
// console.log(c); //works because c is var and is not block scoped
//
// //es5
// (function() {
//   var c = 3;
// })();
//
// console.log(c);

/*****Strings in es6*****/

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//   return 2019 - year;
// }
//
// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
//
// //ES6 - template literals
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)
//
//
// //new es6 string methods
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J')); //is case sensitive
// console.log(n.endsWith('th')); //is case sensitive
// console.log(n.includes(' ')); //for text in middle of string
// console.log(`${firstName} `.repeat(5));

/*******Arrow Functions*****/

// const years = [1990, 1965, 1982, 1937];
//
// //ES5
//
// var ages5 = years.map(function(el) {
//   return 2019 - el;
// });
// console.log(ages5);
//
// //ES6
//
// let ages6 = years.map(el => 2019 - el);
// console.log(ages6);
//
//
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
// console.log(ages6);
//
// // if more than one line for return after => then we have to do This
//
// ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}.`
// });
//
// console.log(ages6);


/*****Arrow Functions: Lexical 'this' keyword*****/

//ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     document.querySelector('.green').addEventListener('click', function() {
//       var str = 'This is a box number ' + this.position + ' and it is ' + this.color
//       alert(str);
//     })
//   }
// }
// box5.clickMe(); //this is not reading position and color.

//
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function() {
//       var str = 'This is a box number ' + self.position + ' and it is ' + self.color
//       alert(str);
//     })
//   }
// }
// box5.clickMe(); //this works because of the self variable


//ES6
// var box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is a box number ' + this.position + ' and it is ' + this.color
//       alert(str);
//     })
//   }
// }
// box6.clickMe(); //works because arrow function has access to the this keyword


// //ES6
// var box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is a box number ' + this.position + ' and it is ' + this.color
//       alert(str);
//     })
//   }
// }
// box66.clickMe(); //does not work because doing an arrow function in the beginning here the this points to global window object


// function Person(name) {
//   this.name = name;
// }
// //es5
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//       return this.name + ' is friends with ' + el;
//     }.bind(this));
//
//     console.log(arr);
// }
//
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends); //this.name is undefined without bind(this)


//ES6

// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el => `${this.name} is friends with ${el}`);
//
//     console.log(arr);
// }
//
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('Mike').myFriends6(friends); //this.name is undefined without bind(this)


/******Destructuring*******/

// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];
// now imagine 5 or 6 elements or even 10!

// ES6
// const[name, age] = ['John', 26];
//
// console.log(name);
// console.log(age);


// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
//
//
// const {firstName, lastName} = obj;
//
// console.log(firstName);
// console.log(lastName);
// //below is used to rename
// const {firstName: a, lastName: b} = obj;
//
// console.log(a);
// console.log(b);
//
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }
//
// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age);
// console.log(retirement);

/******Arrays in ES6******/


// const boxes = document.querySelectorAll('.box')

//ES5
//
 //var boxesArr5 = Array.prototype.slice.call(boxes);
//
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// })


//ES6

// const boxesArr6 = Array.from(boxes);
//
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// or

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5

// for(var i = 0; i < boxesArr5.length; i++) {
//   if(boxesArr5[i].className === 'box blue') {
//     continue;
//   }
//   boxesArr5[i].textContent = 'I changed to blue!';
// }

//ES6

// for (const cur of boxesArr6) {
//   //if (cur.className === 'box blue') {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue!';
//
// }


// ES5

// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
//
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);
//
//
// //ES6
//
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));


/*****Spread operator*****/

// used to expand arguments of an Array

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }
//
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);
//
// //ES5
//
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);
//
// //ES6
//
// //the three dots expand the array into its components
// const sum3 = addFourAges(...ages);
// console.log(sum3);
//
// const familySmith = ['John', 'Jane', 'Mark'];
//
// const familyMiller = ['Mary', 'Bob', 'Ann'];
//
// //combines above arrays with a new Lily one in the middle
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
//
// console.log(bigFamily);
//
// // grabs the header and all the boxes and changes their text color
// // to purple
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
//
// Array.from(all).forEach(cur => cur.style.color = 'purple');

/*****Rest parameters*****/

//same notation as spread but does the opposite
//spread takes array and transforms it into single values
//while rest takes a couple of single values and transforms them into an array

// //ES5
//
// function isFullAge5() {
//   //console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments);
//
//   argsArr.forEach(function(cur) {
//     console.log((2016 - cur) >= 18);
//   })
// }
// //
// // isFullAge5(1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2016, 1987);
//
// //ES6
//
// function isFullAge6(...years) {
//   years.forEach(cur => console.log((2016 - cur) >= 18));
// }
//
// isFullAge6(1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016, 1987);

//ES5

// function isFullAge5(limit) {
//   //console.log(arguments);
//   // use , 1 in the slice so we can exclude the first argument
//   var argsArr = Array.prototype.slice.call(arguments, 1);
//
//   argsArr.forEach(function(cur) {
//     console.log((2016 - cur) >= limit);
//   })
// }
// //
//  //isFullAge5(16, 1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2016, 1987);
//
// //ES6
//
// function isFullAge6(limit, ...years) {
//   years.forEach(cur => console.log((2016 - cur) >= limit));
// }
//
// isFullAge6(16, 1990, 1999, 1965);
// isFullAge6(21, 1990, 1999, 1965, 2016, 1987);

/*******Default parameters******/


//ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//
//   lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality === undefined ? nationality = 'american' : nationality;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
// // the last two parameters are undefined since we didn't define them
// var john = new SmithPerson('John', 1990);
//
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// ES6

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
//
// let john = new SmithPerson('John', 1990);

/*****Maps******/
// new feature in Es6 ...a hashmap data structure
// big difference between object and hashmap is keys can be anything from
// strings, numbers and even functions where as objects had to be only strings as keys
// const question = new Map();
//
// question.set('question', 'What is the official name of the latest major JavaScript version?');
//
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again')
//
//
// console.log(question.get('question'));
// console.log(question.size);
//
// if (question.has(4)) {
//   question.delete(4);
// }
//
// //clear the whole map
// //question.clear();
// //maps are iterable. We can loop through them unlike objects
// // question.forEach((value, key) =>
// // console.log(`This is ${key}, and it's set to ${value}`));
//
//
// for (let [key, value] of question.entries()) {
// //  console.log(`This is ${key}, and it's set to ${value}`)
//   if (typeof(key) === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
//
// const ans = parseInt(prompt('Write the correct answer.'));
//
// console.log(question.get(ans === question.get('correct')));


/*****Classes******/

//ES5

// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// }
//
// var john5 = new Person5('John', 1990, 'teacher');
//
// //ES6
//
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
//
//   static greeting() {
//     console.log('Hey there.');
//   }
//
// }
//
// // static methods are methods that are attached to the class but not inherited by the class instances
//
// const john6 = new Person6('John', 1990, 'teacher');
//
// Person6.greeting();


/****Classes with subclasses (inheritance)******/

//ES5

// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// }
//
// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
//
// }
//
//
// Athlete5.prototype = Object.create(Person5.prototype);
//
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }
//
//
//
// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();
//
// //ES6
//
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
//
//
// }
//
// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }
//
// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
//
// johnAthlete6.calculateAge();
// johnAthlete6.wonMedal();


/****Coding challenge 8*****/

// 3 parks, 4 streets

class Town {
  constructor(name, treeCount) {
    this.name = name;
  }

}

class Park extends Town {
  constructor(townName, treeCount, parkName, buildYear, area) {
    super(townName);
    this.treeCount = treeCount;
    this.parkName = parkName;
    this.buildYear = buildYear;
    this.area = area;
  }

  getAge() {
    let age = new Date().getFullYear() - this.buildYear;
    return age;
  }

  getTreeDensity() {
      console.log(`${this.parkName} has a tree density of ${this.treeCount / this.area} trees per square km`);
  }

  getTreeCount() {
    return this.treeCount;
  }

}

class Street extends Town {
  constructor(townName, treeCount, streetName, buildYear, length) {
    super(townName);
    this.treeCount = treeCount;
    this.streetName = streetName;
    this.buildYear = buildYear;
    this.length = length;
  }

  getStreetLength() {
    return this.length;
  }

  getClassSize() {
    switch(true) {
      case this.length < 50:
        return 'tiny';
        break;
      case this.length >= 50 && this.length < 100:
        return 'small';
        break;
      case this.length >= 100 && this.length < 150:
        return 'normal';
        break;
      case this.length >= 150 && this.length < 200:
        return 'big';
        break;
      case this.length >= 200:
        return 'huge'
        break;
      default:
        return 'normal';
    }
  }
}

let greenPark = new Park('Monte', 950, 'Green Park', 1900, 100);
let greenParkAge = greenPark.getAge();
//greenPark.getTreeDensity();

let nationalPark = new Park('Monte', 800, 'National Park', 1800, 150);
let nationalParkAge = nationalPark.getAge();
let oakPark = new Park('Monte', 1050, 'Oak Park', 1700, 200);
let oakParkAge = oakPark.getAge();



console.log(greenParkAge);

console.log('---------PARKS REPORT--------');
let parkAvgAge = (greenParkAge + nationalParkAge + oakParkAge) / 3;
console.log(`Our 3 parks have an average age of ${parkAvgAge} years.`);
greenPark.getTreeDensity();
nationalPark.getTreeDensity();
oakPark.getTreeDensity();
switch(true) {
  case nationalPark.getTreeCount() > 1000:
    console.log(`${nationalPark.parkName} has more than 1000 trees.`);
    break;
  case oakPark.getTreeCount() > 1000:
    console.log(`${oakPark.parkName} has more than 1000 trees.`);
    break;
  case greenPark.getTreeCount() > 1000:
    console.log(`${greenPark.parkName} has more than 1000 trees.`);
    break;
}
console.log('-------------Street Report----------');
let oceanAve = new Street('Monte', 900, 'Ocean Ave', 1900, 50);
let evergreenStreet = new Street('Monte', 900, 'Evergreen Street', 1800, 700);
let fourthStreet = new Street('Monte', 900, '4th Street', 1850, 900);
let sunsetBlvd = new Street('Monte', 900, 'Sunset Blvd', 1850, 400);
let totalLength = oceanAve.getStreetLength() + evergreenStreet.getStreetLength() + fourthStreet.getStreetLength() + sunsetBlvd.getStreetLength();

function calc(arr) {
  let total = arr.reduce((prev, cur) => prev + cur);
  let avg = total / arr.length;
  return [total, avg];
}

let allStreets = [oceanAve, evergreenStreet, fourthStreet, sunsetBlvd];
let [totalLength2, avg2] = calc(allStreets.map(el => el.getStreetLength()));
console.log(totalLength2);
console.log(avg2);


let avgStreetLength = totalLength / 4;
console.log(`Our four streets have a total length of ${totalLength} km, with an average of ${avgStreetLength} km.`);
console.log(`${oceanAve.streetName}, built in ${oceanAve.buildYear}, is a ${oceanAve.getClassSize()}.`)
console.log(`${evergreenStreet.streetName}, built in ${evergreenStreet.buildYear}, is a ${evergreenStreet.getClassSize()}.`)
console.log(`${fourthStreet.streetName}, built in ${fourthStreet.buildYear}, is a ${fourthStreet.getClassSize()}.`)
console.log(`${sunsetBlvd.streetName}, built in ${sunsetBlvd.buildYear}, is a ${sunsetBlvd.getClassSize()}.`)
