const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};
  
const person2 =person1;
person2.firstName = 'Simon';
  
console.log(person1);
console.log(person2);

//Per i tipi primitivi (stringhe, booleani, numeri) viene passato il valore, per i tipi non primitivi
//(array e oggetti) viene passato il riferimento.