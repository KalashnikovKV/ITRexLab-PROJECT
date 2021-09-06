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
    fetch('http://127.0.0.1:7000/doctors/', {
        method: 'PATCH',
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            currentPatient.innerHTML = JSON.parse(data);
        });
})

buttonAddResolution.addEventListener('click', () => {
    const ttlValue = parseInt(valueTtl.value)
    const q = {
        "name": `${currentPatient.innerHTML}`,
        "resolution": `${inputResolution.value}`,
        "ttl": `${ttlValue}`
    }
    fetch('http://127.0.0.1:7000/doctors/addResolution', {
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
    fetch('http://127.0.0.1:7000/doctors/', {
        method: 'PUT',
        body: JSON.stringify(namePatient),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
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
            console.log(data)
            showResolution.value = null;
            searchInputPatient.value = null
        });
})