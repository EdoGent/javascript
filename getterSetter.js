class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set name(newName) {
        newName = newName.trim();
        if(newName === '') {
            console.log('The name cannot be empty')
        }
        this._name = newName;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);