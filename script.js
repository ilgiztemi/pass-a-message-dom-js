    const input = document.querySelector('#input');
    const error = document.querySelector('#error');
    const output = document.querySelector('#output');
    const submit = document.querySelector('#submit')

    submit.addEventListener('click', function (f) {
        f.preventDefault();
        //check if there is no input
        if(input.value === '') {
            error.style.display = 'block';
            //this function removes error message after 2 seconds
            setTimeout(function () {
                error.style.display = 'none';
            }, 2000);
            output.innerHTML = '';
        }
        //print values if there is any input and change it to upper case
        else {
            output.innerHTML = input.value;
            input.value = '';
        }
    })