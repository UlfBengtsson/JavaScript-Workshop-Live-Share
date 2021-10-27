"use strict";
let firstName = "not true";

let regexFirstName = new RegExp(/^[a-zøæ]{2}\d{1}/, "i");

// ----- Global veribles ----------------------------------------------------------------------------//
const countriesData = [
    { code: "swe", name: "Sweden" },
    { code: "dk", name: "Denmark" },
    { code: "no", name: "Norway" },
    { code: "fi", name: "Finland" }
];

const citiesData = [
    { id: 1, code: "swe", name: "Stockholm" },
    { id: 2, code: "swe", name: "Malmö" },
    { id: 3, code: "swe", name: "Göteborg" },
    { id: 4, code: "dk", name: "Köpenhamn" },
    { id: 5, code: "dk", name: "Odense" },
    { id: 6, code: "dk", name: "Ålborg" },
    { id: 7, code: "no", name: "Oslo" },
    { id: 8, code: "no", name: "Bergen" },
    { id: 9, code: "no", name: "Trondheim" },
    { id: 10, code: "fi", name: "Helsingfors" },
    { id: 11, code: "fi", name: "Tampere" },
    { id: 12, code: "fi", name: "Åbo" },
    { id: 13, code: "fi", name: "Kouvola" }
];

// ----- Event Listener ------------------------------------------------------------------------------//

// ----- Validations ---------------------------------------------------------------------------------//
function validateForm(event) {
    event.preventDefault();
    console.log("firsname true", validateFirstName());
    console.log("lastName true", validateLastname());
    console.log("Birth date true", validateBirthDate());


    //call function´s that validates each input sepratly

}
function validateFirstName() {
    let firstName = document.getElementById("firstName").value;
    if (firstName == "" || firstName.length < 2) {
        return false;

    }
    return true;
}


function validateLastname() {
    let lastName = document.getElementById("lastName").value;
    if (lastName == "" || lastName.length <= 2) {
        return false;

    }

}

function validateBirthDate() {
    let birthDate = document.getElementById("birthDate").value;
    console.log("birthDate raw", birthDate);
    console.log("birthDate type", typeof birthDate);
    if (birthDate == null || birthDate == "") {
        return false;
    }

    birthDate = new Date(birthDate);
    console.log("birthDate Date obj", birthDate);
    console.log("birthDate type", typeof birthDate);
}



// ----- Utility functions ---------------------------------------------------------------------------//

// ----- Functions to run at load of page -------------------------------------------------------------//
