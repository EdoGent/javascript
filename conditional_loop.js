// ceo => 2200€
// manager => 1800€
// cto => 1800€
// developer => 1500€
// default => 1000€

function calculateSalary(role) {
    switch (role) {
        case 'ceo': 
        return 'Ceo salary is 2220€'
        
        case 'manager': 
        return 'Manager salary is 1800€' 
        
        case 'cto': 
        return 'CTO salary is 1800€'
        
        case 'developer': 
        return 'Developer salary is 1500€'

        default: return 'Default salary is 1000€';
    }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const defaultSalary = calculateSalary();

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(defaultSalary);