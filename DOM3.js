const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputAge = document.getElementById('age');

const labelFirstName = inputFirstName.previousElementSibling.textContent;
const labelLastName = inputLastName.previousElementSibling.textContent;
const labelAge = inputAge.previousElementSibling.textContent;

console.log(labelFirstName + ' ' + inputFirstName.getAttribute('value'));
console.log(labelLastName + ' ' + inputLastName.getAttribute('value'));
console.log(labelAge + ' ' + inputAge.getAttribute('value'));