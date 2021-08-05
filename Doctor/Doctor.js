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

let patient = JSON.parse(localStorage.getItem('queue'))

buttonNext.addEventListener('click', () =>{ 
    if(patient.length == 0){
        console.log('пациентов нет')
        currentPatient.value = 'пациентов нет'
        inputResolution.value = null
    }else if(patient.length > 0) {
        const thisPatient = patient.shift()
        setWithoutExpiry(`${thisPatient}`, 'идет осмотр')
        currentPatient.value = thisPatient
        localStorage.setItem('queue', JSON.stringify(patient))
        inputResolution.value = null
    }
})

buttonAddResolution.addEventListener('click', () =>{
    if(currentPatient.value === 'пациентов нет'){
        inputResolution.value = 'некому ставить диагноз'
    }else {
        if(valueTtl.value == ""){
            setWithoutExpiry(`${currentPatient.value}`, inputResolution.value)
            inputResolution.value = null
        }else{
            setWithExpiry(`${currentPatient.value}`, inputResolution.value, (parseInt(valueTtl.value)*1000))
            inputResolution.value = null
            valueTtl.value = null
        }
    }
})

buttonShowResolution.addEventListener('click', () =>{ 
    const value = getWithExpiry(`${searchInputPatient.value}`)
    showResolution.value = value
    searchInputPatient.value = null
})

buttonDeleteResolution.addEventListener('click', () =>{ 
    const noResolution = `диагноз удален врачом`
    localStorage.setItem(`${searchInputPatient.value}`, noResolution)
})

window.addEventListener('storage', event => {
    patient = JSON.parse(localStorage.getItem('queue'))
})

function setWithoutExpiry(key, value) {
	const item = {
        value: value
    }
    localStorage.setItem(key, JSON.stringify(item))
}

function setWithExpiry(key, value, ttl) {
    const now = new Date()
	const item = {
        value: value,
		expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

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