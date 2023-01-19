const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

function calculateAverageAge(persons) {
    return persons.reduce((acc, val) => {
        return acc + val.age
    }, 0)
}

console.log("age sum:", calculateAverageAge(persons));
const average = (Math.round(calculateAverageAge(persons)/persons.length));
console.log("average:", average);