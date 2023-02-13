let promise = new Promise((resolve, reject) => {
    const number = 13;
    if(number > 10) {
        resolve(number)
    } else {
        reject('Smaller than 10')
    }
});

promise
    .then((val) => console.log(val))
    .catch((err) => console.error(err))