// let obj = {
//     name: "Giovanni",
//     surname: "Composto",
//     eta: 29,
//     obj2: {

//         impiego: "studente"
//     }
// }

// let obj4 = { ...obj }
// obj4.name = "Alessio";
// console.log(obj4);
// console.log(obj)

const person1 = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    address: {
      state: 'Italy',
      city: 'Rome',
      street: 'Via Romano, 12'
    }
};
  
const person2 = JSON.parse(JSON.stringify(person1))
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);