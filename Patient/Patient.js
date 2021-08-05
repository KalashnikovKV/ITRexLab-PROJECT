
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
    const value = getWithExpiry(`${search.value}`)
    resolution.value = value
    search.value = null
})

const currentPatient = document.querySelector(".current-patient")

window.addEventListener('storage', event => {
    const patientWithDoctor = event
    currentPatient.innerHTML = patientWithDoctor.key
    arrPatient = JSON.parse(localStorage.getItem('queue'))

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