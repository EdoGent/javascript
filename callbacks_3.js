function printHello() { 
    let hello = setInterval(() => console.log('Hello'), 1000);
    setTimeout(() => clearInterval(hello), 5000);
}

function repeatHello(callback) {
    callback();
}

repeatHello(() => printHello())