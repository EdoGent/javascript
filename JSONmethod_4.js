const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};
  
const json = JSON.stringify({id: 1, age: 25});
const obj = JSON.parse(json);

console.log(json); // Should return: { "id": 1, "age": 25 }
console.log(obj); 