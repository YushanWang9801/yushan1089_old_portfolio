var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.fullName = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.subject = document.getElementById('subject');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isEmail(email){
    let emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+
        "[a-zA-Z0-9_+&*-]+)*@" +
        "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
        "A-Z]{2,7}$";
    return emailRegex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid(){
    let valid = true;
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);
    return valid;
}

class User{
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}

function sendInfo(){
    if (isValid()){
        let newUser = new User(fields.name.value, fields.email.value, fields.subject.value, fields.message.value);
        alert('${newUser.name} Thanks for reaching out.')
    } else{
        alert("Oops, there might be something wrong, please try again")
    }
}
