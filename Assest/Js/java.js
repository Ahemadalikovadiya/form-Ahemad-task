const nameInput = document.getElementById("nameInput");
const spanName = document.getElementById("spanName");

const emailInput = document.getElementById("emailInput");
const spanEmail = document.getElementById("spanEmail");

const passwordInput = document.getElementById("passwordInput");
const spanPassword = document.getElementById("spanPassword");

const addressInput = document.getElementById("addressInput");
const addSpan = document.getElementById("addSpan");

const selcetInput = document.getElementById("selcetInput");
const spanSelect = document.getElementById("spanSelect");


function sumbitData() {
    // Name

    if (!nameInput.value) {
        spanName.style.display = "block";
        console.log("Please Enter your value");
    } else {
        spanName.style.display = "none";
        console.log("it's Done");
    }

    // email 
    if (!emailInput.value) {
        spanEmail.style.display = "block";
        console.log("Please Enter your value");
    } else {
        spanEmail.style.display = "none";
        console.log("it's Done");
    }

    // Password
    if (!passwordInput.value) {
        spanPassword.innerHTML = "Please Your Password!"
        spanPassword.style.display = "block";
        console.log("Please Enter your value");
    } else if (passwordInput.value.length < 4 || passwordInput.value.length > 12) {
        spanPassword.innerHTML = "your password is between 4 and 12 characters"
        spanPassword.style.display = "block";
        console.log("Password length is invalid");
    } else {
        spanPassword.style.display = "none";
        console.log("it's Done");
    }

    // Address
    if (!addressInput.value) {
        addSpan.style.display = "block";
        console.log("Please Enter your value");
    } else {
        addSpan.style.display = "none";
        console.log("it's Done");
    }

    // country 
    if (!selcetInput.value) {
        spanSelect.style.display = "block";
        console.log("Please Enter your value");
    } else {
        spanSelect.style.display = "none";
        console.log("it's Done");
    }
    // Check is form valid
    if(nameInput.value &&
        emailInput.value &&
        passwordInput.value &&
        passwordInput.value.length > 4 &&
        passwordInput.value.length < 12
    ){
        var formData = {
            name : nameInput,
            email : emailInput,
            password : passwordInput.value,
            address : addressInput,
            Country : selcetInput
        };
       
    }
}

