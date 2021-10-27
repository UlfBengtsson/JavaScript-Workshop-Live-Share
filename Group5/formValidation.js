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
    console.log("Firstname = okay?", checkFirstname());
    console.log("Lastname = okay?", checkLastname());
    console.log("Birtdate = okay?", checkBirthdate());
}
//call function´s that validates each input sepratly    
const Firstname = document.getElementById('firstname');
const Lastname = document.getElementById('lastname');
const Birthdate = document.getElementById('birthdate');

//firstname

//function inside a function? oh damn, i see ut now!
function checkFirstname() {
    if (Firstname == null || Firstname == Lastname || Firstname.length < 2) {
        return false;
    }
    else { return true; }
}
function checkLastname() {
    if (Lastname == null || Lastname == Firstname || Lastname.length < 2) {
        return false;
    }
    else { return true; }
}
function checkBirthdate() {
    let today = new Date();//Date.now
    let todaysDate = today.getFullYear() + (today.getMonth() + 1) + today.getDate(); //this will propably not cut it
    if (Birthdate < todaysDate) {
        return true;
    }
    else { return false; }
}


// ----- Utility functions ---------------------------------------------------------------------------//

// ----- Functions to run at load of page -------------------------------------------------------------//



// ----- Requirements for our task -----------------------------------------------------------------------//

/*
Firstname = Minimum or 2 letters and may not be the same as Lastname.

Lastname = Minimum or 2 letters and may not be the same as Firstname.

Birthdate = May only be a date of the past. (Optionial: Congratulate if it´s thier birthday)

Country = Use the list of Countries inside the JavaScript file to create the option tag elements with JavaScript.

City = Use a Event Listener on the Country select element to determin the right cities option´s
*/