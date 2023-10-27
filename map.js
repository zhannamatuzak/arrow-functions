  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num *2);
}
console.log(results);

// Using map()
const multByTwo = function(num){
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplfied w/ map() + arrow function
const arrowFun = nums.map(num => num *2);
console.log(arrowFun);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// Challenge
/**
 * Instead of returning the student names  and ids as arrays, can you think of how  
* you might return them as objects with  the id and name properties still intact? 
*/

const studentsAsObjects = students.map(student => ({ id: student.id, name: student.name }));
console.log(studentsAsObjects);

// Challenge 2

let learners = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
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
// only properties
let [john, ...rest] = learners.map(({ name, results }) => [name, results]);

console.log(john);
console.log(rest);

// objects with properties
let [ben, ...gest] = learners.map(({ name, results }) => ({ name, results }));

console.log(ben);
console.log(gest);