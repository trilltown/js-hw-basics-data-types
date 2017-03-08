// PART 1: Booleans

var a = true;
var b = false;
console.log(a || b); //true
console.log(a && b); //false

var bool1 = false;
var bool2 = false;
var bool3 = false;
var bool4 = true;
var bool5 = false;
var bool6 = false;
var bool7 = false;
var bool8 = true;

// PART 2:  Numbers

var d = 10;
var e = 13.445;
console.log(d - e); //-3.4450000000000003
e = Infinity;
console.log(d - e); // -Infinity
var minNumber = Math.min(d, e);
var superPower = Math.pow(9000, 0.5);
var randomNum = Math.floor(Math.random() * 10);

// Part 3: Strings

var myName = "Christine";
var myFavoriteThing = "long walks on the beach.";
var myQuote = "Hi, my name is " + myName + " and I like " + myFavoriteThing;
var secondQuote = `Hi my name is ${myName} and I like ${myFavoriteThing}`;
var number = 10;
var doesItWork = myName + number;
var thirdCharacter = myName.charAt(2);
var secondWord = myFavoriteThing.slice(5, 10);

// Part 4: Arrays
var coolArray = [];
coolArray = ["Wolverine", "Storm", "Gambit", 1, 2, 3];
console.log(coolArray[5]);
coolArray[1] = "Nunchuck Skills";
coolArray[2] = 100;
coolArray.push(true);
console.log(typeof coolArray[2]);
console.log(coolArray);

// Part 5: Objects
var bpm = heart.bpm;
bpm = 120;
heart.decreaseBpm = function(value){
  this.bpm -= value;
}
console.log(heart.decreaseBpm(10));
console.log(heart.increaseBpm(20));
heart.color = "red";
heart.changeColor = function(color){
  this.color = color;
}
heart.changeColor("black");
console.log(heart.color);

// Part 6: Questions
// 1. split(), charAt(), match(), slice(), substring()
// 2. `git status` displays the differences between the working tree and the index file, and displays files in the working tree that are not tracked by Git
// 3. When the operands of an operator are different types (ie. 2 === "2" we are operating on a Number and String), Javascript converts one of them to an "equivalent" value of the other operand's type.
// 4. === checks for type, == does not.
// 5. pwd (short for print working directory)
// 6. In a nutshell, Forking means you make a "copy" of an existing repo onto your Github. Cloning means you're "downloading" it onto your local machine.
// 7. The difference is a do {} while () will always run at least once because the condition () is only checked after the code has run.
