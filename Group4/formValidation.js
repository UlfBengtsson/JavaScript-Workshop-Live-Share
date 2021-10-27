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
    //call function´s that validates each input sepratly

}

function validateFirstname() {
    var Firstname = document.getElementById('firstName').value//'firstName'

    if (Firstname == '' || Firstname == null || Firstname.length < 2) {
        console.log('Please enter your firstname ');
        return false;

    }
}

function validateLastname() {

    var Lastname = document.getElementById('lastName')

    if (Lastname == '' || Lastname == null || Lastname.length < 2) {
        console.log('Please enter your lastname');
        return false;

    }
}

function validateBirthDate() {

    var birthdate = document.getElementById('birthDate')
    console.log("birthdate", birthdate);

    if (birthdate == null || birthdate == '') {
        console.log('Please enter your birthdae');
        return false;

    }
    birthdate = new Date(birthdate);
    console.log("birthdate date", birthdate);

}

let country = document.querySelector("#country")
country.addEventListener("click", clickonCountry);

function clickonCountry() {
    console.log("Please choose a country");
    country.innerHTML = "You click on country please choose";
    switch (citiesData) {

        case 0: document.querySelector(console.log("Sweden"));
        case 1: console.log("Denmark");
        case 2: console.log("Norway");
        case 3: console.log("Finland");

    }


}


let country = document.querySelector("#city");

function clickonCity() {
    console.log("Please choose a city");
    country.innerHTML = "You click on city please choose";
    switch (citiesData) {
        case 0: console.log("Sweden");
        case 1: console.log("Denmark");
        case 2: console.log("Norway");
        case 3: console.log("Finland");

    }

    country.addEventListener("click", clickonCountry);


}

// ----- Utility functions ---------------------------------------------------------------------------//

// ----- Functions to run at load of page -------------------------------------------------------------//
