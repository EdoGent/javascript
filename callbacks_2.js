function printHello() {
    setInterval(() => console.log('Hello'), 1000);
}

function repeatHello(callback) {
    callback();
}

repeatHello(() => printHello())