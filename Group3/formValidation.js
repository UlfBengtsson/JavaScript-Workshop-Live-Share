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
    console.log("firstname is valid?", validateFristName());
}

function validateFristName() {
    //logic here
    return false;
}

// ----- Utility functions ---------------------------------------------------------------------------//

// ----- Functions to run at load of page -------------------------------------------------------------//
