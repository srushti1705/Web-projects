let formData = {
    name: "",
    email: "",
    status: "inactive",
    gender: "Male"
}

let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrorMsgEl = document.getElementById("nameErrorMsg");
let emailEl = document.getElementById("email");
let emailErrorMsgEl = document.getElementById("emailErrorMsg");
let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer d20a224177d5edeff56b134a5403336e3a0fbdc0e9088551d57bb01e8e0d28c5"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public/v2/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.code === 422) {
                if (data.data[0].message === "has already been taken") {
                    emailErrorMsgEl.textContent = "Email already exists";
                }
            }
            console.log(data);
        })
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitFormData(formData);
});

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorMsgEl.textContent = "Name is required";
    }
    else {
        nameErrorMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorMsgEl.textContent = "Email is required";
    }
    else {
        emailErrorMsgEl.textContent = "";
    }
    formData.email = event.target.value;  
});