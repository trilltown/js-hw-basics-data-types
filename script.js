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
console.log(Math.floor(e-d))
e = Infinity
console.log(Math.floor(e-d))