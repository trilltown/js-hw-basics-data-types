[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Javascript Ninja: Mastering the Basics

![image](http://khjs.org/images/tild3133-6137-4164-b263-613730313863__logo.png)

## Exercise Objectives
* Gain practice coding proper syntax for Javascript data types
* Gain experience with Git: add and commit your code frequently.
* Feel comfortable searching through and using [MDN's Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
* Access and change values for Javascript data types (String, Array, Objects)

## Setup

  - In today's `homework` folder, touch a `script.js` file.
  - Open the file by typing `atom script.js` in terminal.
  - You will write your Javascript in here. You can run and test your code in the terminal by running `node script.js`.

## Instructions

  - Get through all the challenges and be crowned Javascript Ninja Warrior.
  - You can comment out code you're not using with the shortcut `cmd` + `/`.
  - Each instruction's code should go on its own line.
  - You need to test your variables, even if there is no instruction to console log them. Make sure you're logging the right value by leaving all other console logs commented out to avoid mega confusion down the road.

#### SYNTAX MATTERS!

  - Half the struggle with programming is dealing with syntax errors. Since coding is about writing a specific set of instructions, it's important to pay extra attention to your code: capitalization, lower case, correct symbols, quotes, semi-colons, etc... it **matters**. If you're not seeing the answer as you expect or you get a syntax error.. double check your syntax, character by character.

### Challenge 1: Booleans
1. Create a variable `a` and set it equal to `true`.
2. Create a variable `b` and set it equal to `false`.
3. Write a statement using `a` and `b` that evaluates to `false`.
  - console log the result to terminal
4. Write a statement using `a` and `b` that evaluates to `true`.
  - console log the result to terminal

For each expression below, indicate whether it is 'truthy' or 'falsey' by assigning a variable a value of either true or false:

5. true && false
6. true && 1 != 1
7. "1" === 1
8. !(true && false)
9. false || 0 != 0
10. 3 >= 3 && (!("banana" === "banana" || "javascript" === "fun"))
11. null === undefined
12. isNaN(undefined)
13. :dart: Commit -m "Commit 1: Boolean Skills"

### Challenge 2: Numbers
Refer to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) about `Math`.

1. Create a variable `d` and set it equal to a `10`.
2. Create a variable `e` and set it equal to `13.445`.
3. Console log the difference.
4. In the next line, set `e` equal to `Infinity`.
5. Console log the difference.
6. Using [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), create a variable called `minNumber` and set it equal to the smaller value between `d` and `e`.
7. Using [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), create a variable called `superPower`, set it equal to `9000 to the power of one-half`.
8. Using [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), create a variable called `randomNum` and set it equal to a random number **rounded down** between 1 and 10.
9. Console log the result of `randomNum` and make sure there are **no** decimals.
10. :dart: Commit -m "Commit 2: Number Skills"

### Challenge 3: Strings
Refer to the [String methods listed in MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

1. Create a variable called `myName` and set it equal to your first name.
2. Create a variable called `myFavoriteThing` and set it equal to `"long walks on the beach."`
3. Create a variable called `myQuote`. Using string interpolation, use `myName` and `myFavoriteThing` to output "Hi, my name is Christine and I like long walks on the beach." Except it should say your name, not Christine. Mind the spacing!
4. Using a different string interpolation method (string literals?), console log the exact same output.
5. Create a variable called `number` and set it equal to `10`.
6. Create a variable called `doesItWork` and set it equal to `myName + number`. Console log it. Is it what you expected?
7. Create a variable called `thirdCharacter` and set it equal to the third character in `myName`. Console logging `thirdCharacter` should give you back only the 3rd letter in your name.
8. Create a variable called `secondWord`. Using [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) on `myFavoriteThing`, set `secondWord` equal to the string `"walks"` (no spaces).
  - `var secondWord = "walks"` does not count.
9. :dart: Commit -m "Commit 3: String Skills"

### Challenge 4: Arrays

1. Create a variable `coolArray` and set it equal to an empty array.
2. Set the variable `coolArray` to an array with 3 Strings and 3 Numbers.
3. Console log the last element of the array.
4. Set the second value of `coolArray` to the string `"Nunchuck Skills"`.
5. Set the third value of `coolArray` to the Number 100.
6. Push the Boolean value `true` into `coolArray`.
7. Console log the data type of the third element of the array.
8. Console log `coolArray`. Does it reflect all the above changes?
9. :dart: Commit -m "Commit 4: Array Skills"

### Challenge 5: Objects

Add the following object to `script.js` and write code to access/change the properties for the `heart` object:

  ```
  var heart = {
    bpm : 140,
    increaseBpm : function(value) {
      this.bpm += value;
    }
  }
  ```

1. Create a variable called `bpm` and set it equal to heart's bpm value.
  - `var bpm = 140` does NOT count! Access `140` some how.
2. Set heart's bpm to `120`.
3. Write a new function within the heart object that will decrease bpm by a value of the user's choosing.
4. Invoke the increaseBpm function and the decreaseBpm function and console.log the results.
5. Include a new key in heart object called 'color', and set the value to "red".
6. Make a function inside the heart object that changes the color to a value of the user's choosing.
7. Invoke the color function and set the color to 'black', and console.log the color.
8. :dart: Commit -m "Commit 5: Object Skills"

### Challenge 6: The Final Challenge!

You're almost done! You've had a good warm up with Javascript basics. Now let's solidify your knowledge with the ALL concepts you've learned so far.

Answer the questions in `script.js` in the form of a comment (short answers).

1. List at least 5 properties built into a string.
2. What does running `git status` do?
3. In your own words, what is type coercion in Javascript?
4. What is the difference between == and === ?
5. What command line shortcut lets me see what directory I'm currently in?
6. What's the difference between forking and cloning in Github?
7. What's the difference between a `while` loop and a `do while` loop?
8. :dart: Commit -m "Commit 6: Object Skills"

### Achievement Unlocked: Ninja Warrior Status!

![image](http://www.andrewcarrollgames.com/wp-content/uploads/2013/01/code_ninja.png)

### Reach Goals
Reach Goals are not required for homework completion, but I highly recommend you try to master them all! Sharpen those skills!

1. Write a `for` loop that counts from 0 (inclusive) to 1857 (exclusive) and calculates the sum of all of those numbers, storing the result in the variable `reachGoalOne`.
  * :dart: Commit -m "Commit 7: Reach 1 Done"

2. Write a `while` loop that increases `count` by 12 when it's strictly below 95, decreases it by 7 when it's strictly above 105, and stops as soon as `count` equals or falls between those two values.
  * :dart: Commit -m "Commit 8: Reach 2 Done"

2. Using whatever code you like, calculate n^n for each value from n from 1 to 10 (both inclusive), and store the sum in the variable `reachGoalThree`.
  * :dart: Commit -m "Commit 9: No one can defeat me!"

## Submitting Your Work

  When you're ready, create an issue on the class repo with
  a title in the format "First and Last Name -- Week XX Day XX".
  The issue body should have:

  *   A link to your forked repo (ie. to your `homework` folder)
  *   A 'comfort' score on how you feel about your answers, from 1 (very
      uncomfortable) to 5 (very comfortable)
  *   A 'completeness' score, from 1 (didn't do it) to 5 (finished all of it)    
  *   A 'win'
  *   A 'struggle'
  *   A 'comment'
