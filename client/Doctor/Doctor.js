const currentPatient = document.querySelector(".current-patient");
const inputResolution = document.querySelector(".input-resolution");
const buttonAddResolution = document.querySelector(".button-add-resolution");
const buttonNext = document.querySelector(".button-next")

const searchInputPatient = document.querySelector(".search-input-patient")
const buttonShowResolution = document.querySelector(".button-show-resolution")
const showResolution = document.querySelector(".show-resolution")
const buttonDeleteResolution = document.querySelector(".button-delete-resolution")

const valueTtl = document.querySelector(".ttl")

buttonNext.addEventListener('click', () => {
    fetch('http://127.0.0.1:7000/doctors/nextPatient', {
        method: 'PATCH',
    })
        .then((response) => {
            // console.log(response)
            return response.json();
        })
        .then((data) => {
            console.log(data)
            currentPatient.innerHTML = data;
        });
})

buttonAddResolution.addEventListener('click', () => {
    const ttlValue = parseInt(valueTtl.value)
    const q = {
        "name": `${currentPatient.innerHTML}`,
        "resolution": `${inputResolution.value}`,
        "ttl": `${ttlValue}`
    }
    fetch('http://127.0.0.1:7000/doctors/addCurrentPatient', {
        method: 'PUT',
        body: JSON.stringify(q),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    inputResolution.value = null
})

buttonShowResolution.addEventListener('click', () => {
    const namePatient = {
        "name": `${searchInputPatient.value}`
    }
    fetch('http://127.0.0.1:7000/doctors/getPatientWithResolution', {
        method: 'PUT',
        body: JSON.stringify(namePatient),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data) => {
            console.log(data)
            showResolution.value = data;
        });
})

buttonDeleteResolution.addEventListener('click', () => {
    const namePatient = {
        "name": `${searchInputPatient.value}`
    }
    fetch('http://127.0.0.1:7000/doctors/deleteResolutionPatient', {
        method: 'DELETE',
        body: JSON.stringify(namePatient),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data) => {
            console.log(data)
            showResolution.value = data;
        });
})