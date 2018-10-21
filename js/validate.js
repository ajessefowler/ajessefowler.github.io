document.addEventListener('DOMContentLoaded', initValidation);

function initValidation() {
    let prevEmail;

    document.getElementById('send').addEventListener('click', function(event) {
        const warning = document.getElementById('emailwarning');
        const email = document.getElementById('email').value;
        const checked = (email === prevEmail) ? true : false;
        const isValid = validateEmail(email) ? true : false;

        if (!isValid && !checked) {
            event.preventDefault();
            warning.style.display = 'block';
        } else if (isValid) {
            warning.style.display = 'none';
        }

        prevEmail = email;
    });
}

function validateEmail(email) {
    const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validator.test(String(email).toLowerCase());
}

