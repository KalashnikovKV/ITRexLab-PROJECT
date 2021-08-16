// window.location.reload()
// иногда приходится перезагружать страницу доктора, чтобы эта страница увидела key 'doctor' и его value
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
        method: 'PUT', // ? PATCH
    })
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data) => {
            console.log(data)
            currentPatient.innerHTML = data.name;
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
    const q = {
        "name": `${searchInputPatient.value}`
    }
    fetch('http://127.0.0.1:7000/doctors/getPatientWithResolution', {
        method: 'PUT',
        body: JSON.stringify(q),
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
    searchInputPatient.value = null
})

buttonDeleteResolution.addEventListener('click', () => {
    const noResolution = `диагноз удален врачом`
    localStorage.setItem(`${searchInputPatient.value}`, noResolution)
})




function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}