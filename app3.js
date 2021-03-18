//Validar nombre
// - El nombre no este vacio(null, undefined)
// - Longuitud minima de 5 caracteres
var isValidFullName = fullname => fullname && (fullname.length >= 5);


// Primero obtenemos el nombre introducido
// Segundo validar ese nombre
// Tercero si es invalido, aplicamos una regla de css al input
// Si es valido , no se aplica la regla
var validateFullname = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);

    if (valid) {
        fullNameField.classList.remove("error"); //Propiedad: la lista de clases que tienen su atributo class
    } else {
        fullNameField.classList.add("error");
    }
    return valid;
}

//Validar fecha de nacimiento
// - Year. mayor 1850.menor o = año actual
// - Month. Entre 1 y 12.
// - Days. 28-29(bisiesto) 30-31 (maximo mes)
var isValidYear = year => year && (year >= 1850) && (year <= new Date().getFullYear()); //clase date crear dia ejecuta
var isValidMonth = month => month && (month > 1) && (month <= 12);
//Saber si el año es bisiesto o no.
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

var isValidDay = (day, month, year) => {
        // var leapYear = isLeapYear(year);
        // var februaryLength = leapYear ? 29 : 28;
        var monthLenght = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return day > 0 && day <= monthLenght[month - 1];
    }
    //Romper un string
var splitDateInParts = date => {
    var parts = date.split("/");
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])]
}

var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date);
    var validYear = isValidYear(parts[2]);
    var validMonth = isValidMonth(parts[1]);
    var validDay = isValidDay(parts[0], parts[1], parts[2]);
    return validYear && validMonth && validDay;
}
var validateBirthdate = () => {
        var birthdayField = document.getElementById("birthday");
        var valid = isValidDate(birthdayField.value);

        if (valid) {
            birthdayField.classList.remove("error"); //Propiedad: la lista de clases que tienen su atributo class
        } else {
            birthdayField.classList.add("error");
        }
        return valid;
    }
    //Validar DNI
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS[dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}
var validateDni = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);

    if (valid) {
        dniField.classList.remove("error"); //Propiedad: la lista de clases que tienen su atributo class
    } else {
        dniField.classList.add("error");
    }
    return valid;
}

//Validar telefono
var isValidMobile = mobile => {
    return (
        mobile && parseInt(mobile) && mobile.length === 9 && (mobile.startsWith("9") || mobile.startsWith("8") || mobile.startsWith("7") || mobile.startsWith("6"))
    );
}

var validateMobile = () => {
    var mobileField = document.getElementById("mobile");
    var valid = isValidMobile(mobileField.value);

    if (valid) {
        mobileField.classList.remove("error"); //Propiedad: la lista de clases que tienen su atributo class
    } else {
        mobileField.classList.add("error");
    }
    return valid;
}


//General Algorithm

var validateForm = (event) => {
    event.preventDefault(); // Cancela la tarea predefinida del submit

    validateFullname(); //ValidateFullname
    validateBirthdate() //ValidateBirthdate
    validateDni(); //ValidateDni
    validateMobile(); //ValidateMobile
};

//Events
document.getElementById("register").addEventListener("submit", validateForm);