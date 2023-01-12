let num = 8;

function multiplyByTwo(num) {
    function inner() {
        return num * 2;
    }
    return inner;
}

console.log(multiplyByTwo(num)());