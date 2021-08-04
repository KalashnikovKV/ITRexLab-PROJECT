
const inputNewPatient = document.querySelector(".new-patient");

let arrPatient = []

document.querySelector(".button-add-new-patient").addEventListener('click', () =>{ 
    arrPatient.push( `${inputNewPatient.value}`)
    const q = JSON.stringify(arrPatient)
    localStorage.setItem('queue', q)
    inputNewPatient.value = null
})

const search = document.querySelector(".input-searh-patient");
const resolution = document.querySelector(".resolution-from-doctor");

search.addEventListener('change', () =>{ 
    resolution.value = localStorage.getItem(`${search.value}`)
    search.value = null
})

const currentPatient = document.querySelector(".current-patient")

window.addEventListener('storage', event => {
    const patientWithDoctor = event
    currentPatient.value = patientWithDoctor.key
    arrPatient = JSON.parse(localStorage.getItem('queue'))

})