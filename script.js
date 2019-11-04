// ### Challenge 1: Booleans
// 1. Create a variable `a` and set it equal to `true`.
// 2. Create a variable `b` and set it equal to `false`.
// 3. Write a statement using `a` and `b` that evaluates to `false`.
//   - console log the result to terminal
// 4. Write a statement using `a` and `b` that evaluates to `true`.
//   - console log the result to terminal

let a = true; 
let b = false; 
console.log(a === b)
console.log(a !== b)

// For each expression below, indicate whether it is 'truthy' or 'falsey' by assigning a variable a value of either true or false:

// 5. true && false
// 6. true && 1 != 1
// 7. "1" === 1
// 8. !(true && false)
// 9. false || 0 != 0
// 10. 3 >= 3 && (!("banana" === "banana" || "javascript" === "fun"))
// 11. null === undefined
// 12. isNaN(undefined)
// 13. :dart: Commit -m "Commit 1: Boolean Skills"

let prob5 = false;
let prob6 = false;
let prob7 = false;
let prob8 = true;
let prob9 = false; 
let prob10 = false;
let prob11 = false;
let prob12 = false;
let prob13 = true;

// ### Challenge 2: Numbers
// Refer to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) about `Math`.

// 1. Create a variable `d` and set it equal to a `10`.
// 2. Create a variable `e` and set it equal to `13.445`.
// 3. Console log the difference.
// 4. In the next line, set `e` equal to `Infinity`.
// 5. Console log the difference.
// 6. Using [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), create a variable called `minNumber` and set it equal to the smaller value between `d` and `e`.
// 7. Using [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), create a variable called `superPower`, set it equal to `9000 to the power of one-half`.
// 8. Using [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), create a variable called `randomNum` and set it equal to a random number **rounded down** between 1 and 10.
// 9. Console log the result of `randomNum` and make sure there are **no** decimals.
// 10. :dart: Commit -m "Commit 2: Number Skills"

let d = 10;
let e = 13.445;
console.log(e-d)
e = Infinity
console.log(Math.floor(e-d))
let minNumber = Math.min(e, d)
console.log(minNumber)
let superPower = Math.pow(9000, .5)
console.log(superPower)
let randomNum = Math.floor(Math.random() * 10)
console.log(randomNum)

// ### Challenge 3: Strings
// Refer to the [String methods listed in MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

// 1. Create a variable called `myName` and set it equal to your first name.
// 2. Create a variable called `myFavoriteThing` and set it equal to `"long walks on the beach."`
// 3. Create a variable called `myQuote`. Using string interpolation, use `myName` and `myFavoriteThing` to output "Hi, my name is Christine and I like long walks on the beach." Except it should say your name, not Christine. Mind the spacing!
// 4. Using a different string interpolation method (string literals?), console log the exact same output.
// 5. Create a variable called `number` and set it equal to `10`.
// 6. Create a variable called `doesItWork` and set it equal to `myName + number`. Console log it. Is it what you expected?
// 7. Create a variable called `thirdCharacter` and set it equal to the third character in `myName`. Console logging `thirdCharacter` should give you back only the 3rd letter in your name.
// 8. Create a variable called `secondWord`. Using [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) on `myFavoriteThing`, set `secondWord` equal to the string `"walks"` (no spaces).
//   - `var secondWord = "walks"` does not count.
// 9. :dart: Commit -m "Commit 3: String Skills"

let myName = "Phillip" 
let myFavoriteThing = "long walks on the beach"
let myQuote = `Hi, my name is ${myName} and I like ${myFavoriteThing}.`
let myQuote2 = "Hi, my name is " + myName + " and I like " + myFavoriteThing + "." 
console.log(myQuote)
console.log(myQuote2)
let number = 10
let doesItWork = myName + number 
console.log(doesItWork)
let thirdCharacter = myName[2]
console.log(thirdCharacter)
let secondWord = myFavoriteThing.slice(5, 11)
console.log(secondWord)

// ### Challenge 4: Arrays

// 1. Create a variable `coolArray` and set it equal to an empty array.
// 2. Set the variable `coolArray` to an array with 3 Strings and 3 Numbers.
// 3. Console log the last element of the array.
// 4. Set the second value of `coolArray` to the string `"Nunchuck Skills"`.
// 5. Set the third value of `coolArray` to the Number 100.
// 6. Push the Boolean value `true` into `coolArray`.
// 7. Console log the data type of the third element of the array.
// 8. Console log `coolArray`. Does it reflect all the above changes?
// 9. :dart: Commit -m "Commit 4: Array Skills"

let coolArray = []
coolArray = ["Hello", "World", "Monday",1,2,3]
console.log(coolArray[5])
coolArray[1] = "Nunchuck Skills"
console.log(coolArray)
coolArray[2] = 100
console.log(coolArray)
coolArray.push(true)
console.log(coolArray)
console.log(typeof coolArray[2])
console.log(coolArray)

// ### Challenge 5: Objects

// Add the following object to `script.js` and write code to access/change the properties for the `heart` object:

//   ```
//   var heart = {
//     bpm : 140,
//     increaseBpm : function(value) {
//       this.bpm += value;
//     }
//   }
//   ```

// 1. Create a variable called `bpm` and set it equal to heart's bpm value.
//   - `var bpm = 140` does NOT count! Access `140` some how.
// 2. Set heart's bpm to `120`.
// 3. Write a new function within the heart object that will decrease bpm by a value of the user's choosing.
// 4. Invoke the increaseBpm function and the decreaseBpm function and console.log the results.
// 5. Include a new key in heart object called 'color', and set the value to "red".
// 6. Make a function inside the heart object that changes the color to a value of the user's choosing.
// 7. Invoke the color function and set the color to 'black', and console.log the color.
// 8. :dart: Commit -m "Commit 5: Object Skills"

let heart = {
    bpm: 140,
    color: "red",
    increaseBpm: function(value) {
        this.bpm += value;
    },
    decreaseBpm: function(value) {
        this.bpm -= value;
    }

}

let bpm = heart.bpm 
console.log(bpm)
