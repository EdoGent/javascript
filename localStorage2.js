const user = {
    id : 1,
    name : 'John',
    age : 25,
};

function setLocalStorage() {
    return localStorage.setItem('user', JSON.stringify(user));
}

setLocalStorage();

const getLocal = localStorage.getItem('user');
console.log(getLocal);