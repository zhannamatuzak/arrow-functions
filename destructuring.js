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

// Challenge
/**
 * Declare a variable named: makeList using the keyword const
 * The variable makeList should be assigned an arrow function
 * The arrow function should take two parameters named: arr, student
 * The arrow function should use a return statement
 * The function should return an array of the subjects for the student whose name is passed into the function when called.
* Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
* log out the values  first, second, and rest to view their values
*/
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    const foundStudent = arr.find(s => s.name === student);

        return foundStudent.subjects;
  
};

let [first, second, ...rest] = makeList(students, 'John');

console.log(first, second, rest);

