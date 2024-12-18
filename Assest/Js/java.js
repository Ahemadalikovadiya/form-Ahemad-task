const nameInput = document.getElementById("nameInput");
const spanName = document.getElementById("spanName");

const emailInput = document.getElementById("emailInput");
const spanEmail = document.getElementById("spanEmail");

const passwordInput = document.getElementById("passwordInput");
const spanPassword = document.getElementById("spanPassword");

const addressInput = document.getElementById("addressInput");
const addSpan = document.getElementById("addSpan");

const sportInput = document.querySelectorAll('input[name="sportPlay"]');
const spanSport = document.getElementById("spanSport");

const genderInput = document.querySelectorAll("input[name='gender']");
const spanGender = document.getElementById("spanGender");

const countryInput = document.getElementById("countryInput");
const spanSelect = document.getElementById("spanSelect");

const tableDetailes = document.getElementById("tableDetailes");




function mainData() {
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

    // Sport 
    const sportChecked = [];
    for (let i = 0; i < sportInput.length; i++){
        if (sportInput[i].checked){
            sportChecked.push(true);
        }
    }if(sportChecked.length == 0){
        spanSport.style.display = "block";
        console.log("Please Enter Your value");
    }else{
        spanSport.style.display = "none";
        console.log("it's Done");
    }

    // gender
    const AnyChecked = [];
    for (let i = 0; i < genderInput.length; i++) {
      if (genderInput[i].checked) {
        AnyChecked.push(true);
      }
    }
    if (AnyChecked.length == 0) {
       spanGender.style.display = "block";
      console.log("enter your value");
    } else {
      spanGender.style.display = "none";
      console.log("it's Done");
    }

    // country 
    if (!countryInput.value) {
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
        passwordInput.value.length < 12 &&
        sportInput.length !=0 &&
        genderInput.length !=0 &&
        countryInput.value 
        
    ){
        const formData = {
            name : nameInput.value,
            email : emailInput.value,
            password : passwordInput.value,
            address : addressInput.value,
            Country : countryInput.value
        };

        tableData(formData);
        resetForm();
    }
}

// function tableData(formData){
//     const tr = document.createElement("tr");
//     console.log(tr);
//     const nameTd = document.createElement("td");
//     const emailTd = document.createElement("td");
//     const addressTd = document.createElement("td");
//     const passwordTd = document.createElement("td");
//     nameTd.innerHTML = formData.name;
//     emailTd.innerHTML = formData.email;
//     passwordTd.innerHTML = formData.password;
//     addressTd.innerHTML = formData.address;

//     tr.append(
//         nameTd,
//         emailTd,
//         passwordTd,
//         addressTd,
//       );
//       console.log(tr);
//       tableDetailes.appendChild(tr);
// }

function tableData(formData) {
    const tr = document.createElement("tr");
    console.log(tr);
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const addressTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const sportTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const countryTd = document.createElement("td");


    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    addressTd.innerHTML = formData.address;
    passwordTd.innerHTML = formData.password;
    countryTd.innerHTML = formData.Country;
    tr.append(
      nameTd,
      emailTd,
      passwordTd,
      addressTd,
      sportTd,
      genderTd,
      countryTd,
    );
    console.log(tr);
    tableDetailes.appendChild(tr);
  }
  function resetForm() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    addressInput.value = "";
    countryInput.value = "";
  }
  
  
  
  