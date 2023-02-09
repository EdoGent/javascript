function hello() {
    setTimeout(() => console.log('Hello'),1000);
}

function printAsyncName(callback, name) {
    callback();
    setTimeout(() => console.log(name),2000);
}



printAsyncName(() => hello(),'Edo');