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
document.getElementById('country').addEventListener('change', cityOptions);


// ----- Validations ---------------------------------------------------------------------------------//
function validateForm(event) {
    event.preventDefault();
    //call function´s that validates each input sepratly
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    console.log("firstName valid?:", validateName(firstName));
    console.log("lastName valid?:", validateName(lastName));
    console.log("first and last name are not the same?:", validateNotSameFirstLastName(firstName, lastName))
    console.log("BirthDate valid?:", validateBirthDate());
}
//firstName & lastName have same requierments
function validateName(name) {
    if (name == null || name == "" || name.length < 2) {
        return false;
    } else {
        return true;
    }
}

function validateNotSameFirstLastName(first, last) {
    if (first == last) {
        return false;
    }

    return true;
}

function validateBirthDate() {
    let birthDate = document.getElementById('birthDate').value;

    if (birthDate == null || birthDate == "") {
        return false;
    }

    birthDate = new Date(birthDate);
    let today = Date.now();

    if (birthDate >= today) {
        return false;
    }

    return true;
}

// ----- Utility functions ---------------------------------------------------------------------------//
function seedCountiresOptions() {
    const countrySelect = document.getElementById('country');

    countriesData.forEach(country => {
        let option = document.createElement('option');
        option.value = country.code;
        option.text = country.name;

        countrySelect.appendChild(option);
    });
}

function cityOptions() {
    const countryCode = document.getElementById('country').value;
    const citySelect = document.getElementById('city');

    citySelect.innerHTML = "";//clear away old options
    let selectCityOption = document.createElement('option');
    selectCityOption.text = "Select a City";
    selectCityOption.selected;
    selectCityOption.disabled;
    citySelect.appendChild(selectCityOption);

    citiesData.forEach(city => {
        if (city.code == countryCode) {
            let option = document.createElement('option');
            option.value = city.id;
            option.text = city.name;

            citySelect.appendChild(option);
        }
    });
}

// ----- Functions to run at load of page -------------------------------------------------------------//
seedCountiresOptions();