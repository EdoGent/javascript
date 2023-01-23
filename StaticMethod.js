const obj = {
    firstName: 'Mario',
    lastName: 'Rossi'
};

class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    static fromObject(obj) {
        return obj;
    }
}

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
