"use strict";
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
    console.log("firstname valid?:", validateFirstname());
    console.log("lastname valid?:", validateLastname());
    console.log("country valid?:", validateCountry());
}

function validateFirstname() {
    let userFirstName = document.getElementById("firstName").value;
    if (userFirstName == "" || userFirstName.lenght < 2 || userLastName == userFirstName) {
        return false;
    }
    return true;
}
function validateLastname() {
    let userLastName = document.getElementById("lastName").value;
    if (userLastName == "" || userLastName.lenght < 2 || userLastName == userFirstName) {
        return false;
    }
    return true;
}
function validateCountry() {
    let country = document.getElementById("country").value;
    console.log("country value:", country);
    if (country == "Select a country") {
        return false;
    }
    return true;
}
// ----- Utility functions ---------------------------------------------------------------------------//
function countryGlider() {
    var countryForm = document.getElementById("country")
    for (var i = 0; i < countriesData.length; i++) {
        var option = countriesData[i];
        var el = document.createElement("option");
        el.text = option.name;
        el.value = option.code;

        countryForm.appendChild(el);
    }
}

// ----- Functions to run at load of page -------------------------------------------------------------//
countryGlider();