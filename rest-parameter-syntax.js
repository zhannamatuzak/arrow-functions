/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b+ c;
let sum = sumAll(1, 2, 3);
console.log("sum:", sum);

// Extra arguments are ignored
let sum2 =sumAll(1, 2, 3, 4, 5, 6);
console.log("sum2:", sum2);

// Function using ...rest
const sumRest = (a, b,c, ...rest) => {
    let sum = a +b +c;
    for (let i of rest){
        sum+= i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum3:", sum3);

// Challenge
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

// Create a variable named moreMixedLetters and assign an array to it by copying mixedLetters and adding additional values
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

// Log out moreMixedLetters
console.log( moreMixedLetters);

/**
 * Create a variable named updateSortReverse and assign it an arrow function.
 * The arrow function should take two parameters one named: 
 * arr and another named: letters which should use the rest parameter syntax } arr 
 */
const updateSortReverse = (arr, ...letters) => {
    return [...arr, ...letters].sort().reverse();
};

// Create a variable named reverseSort and assign the return value from calling updateSortReverse
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

// Log out the variable reverseSort
console.log(reverseSort);

// Log out the variable mixedLetters to see that it has not been changed
console.log( mixedLetters);