let form = document.querySelectorAll('input');
console.log(form);

form.forEach((input) => {
    if(input.type === 'text') {
        console.log(input.value)
    }
})