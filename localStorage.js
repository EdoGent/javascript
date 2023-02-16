const user = {
    id: 1,
    name: "John",
    age: 25,
};

function setLocalStorage() {
    return localStorage.setItem('user', JSON.stringify(user));
}

setLocalStorage();