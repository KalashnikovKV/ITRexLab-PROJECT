
const inputNewPatient = document.querySelector(".new-patient");

document.querySelector(".button-add-new-patient").addEventListener('click', () =>{ 
    const q = {"name": `${inputNewPatient.value}`}
    fetch('http://127.0.0.1:7000/patients/add', {
        method: 'POST', 
        body: JSON.stringify(q), 
        headers: {
          'Content-Type': 'application/json'
        }
    });
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