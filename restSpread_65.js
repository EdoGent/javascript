function sum(...rest) {
    let sum = 0;
    for(const arg of rest) {
        sum += arg;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));