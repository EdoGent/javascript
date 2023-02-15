let isLogged1 = true;

function isLogged(isLogged1) {
    return new Promise((resolve, reject) => {
            let rand = Math.random();
            if(isLogged1) {
                resolve(rand)
            } else {
                reject(new Error(`It's false`))
            }
    })
}

function getDetails(number) {
    return new Promise((resolve, reject) => {
            if(number > 0.5) {
                resolve({nome: "John", età: 24})
            } else {
                reject(new Error(`The number it's smaller than 0.5`))
            }
    })
}

function getName({nome}) {
    throw new Error('This is an added ERROR')
    return nome;
}

isLogged(isLogged1)
    .then(getDetails)
    .then(getName)
    .then((nome) => console.log(nome))
    // .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log('I ran when there is an error too'))