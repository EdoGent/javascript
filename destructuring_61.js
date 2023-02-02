const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};
  
const {id: identity , firstName: name , lastName: surName, age: yearsold } = person;

const id = person.id;
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
  
console.log(id, firstName, lastName, age);