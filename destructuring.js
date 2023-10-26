/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [26, 30, 41];
// let john = ages[0];
// let alla = ages[1];
// let ben = ages[2];
let [john, alla, ben] = ages;
console.log(john, alla, ben);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "spanish",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondVavorite, ...others] = fruits;
console.log(favorite);
console.log(secondVavorite);
console.log(others);

let favoriteFoods = {
    brian: "pie",
    anna: "soup",
    sarah: "pizza",
    andrea: "fish"
};

let { brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);