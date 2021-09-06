const inputNewPatient = document.querySelector(".new-patient");
const buttonAddNewPatient = document.querySelector(".button-add-new-patient")

const search = document.querySelector(".input-searh-patient");
const resolution = document.querySelector(".resolution-from-doctor");

const currentPatient = document.querySelector(".current-patient")

buttonAddNewPatient.addEventListener('click', () => {
    const namePatient = { "name": `${inputNewPatient.value}` }
    fetch('http://127.0.0.1:7000/patients/', {
        method: 'POST',
        body: JSON.stringify(namePatient),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    inputNewPatient.value = null

    fetch('http://127.0.0.1:7000/patients/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            currentPatient.innerHTML = data;
        });
})

search.addEventListener('change', () => {
    const namePatient = {
        "name": `${search.value}`
    }
    fetch('http://127.0.0.1:7000/doctors/', {
        method: 'DELETE',
        body: JSON.stringify(namePatient),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            resolution.value = data;
        });
})