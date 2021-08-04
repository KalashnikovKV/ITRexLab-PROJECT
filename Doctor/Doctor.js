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

let patient = JSON.parse(localStorage.getItem('queue'))

buttonNext.addEventListener('click', () =>{ 
    const currentParient = patient[0]
    if(patient.length == 0){
        console.log('пациентов нет')
        currentPatient.value = 'пациентов нет'
        inputResolution.value = null
    }

    if(patient.length >= 1){
        localStorage.setItem(`${currentParient}`, 'врач осматривает пациента')
        currentPatient.value = currentParient
        patient.shift(currentParient)
        localStorage.setItem('queue', JSON.stringify(patient))
        inputResolution.value = null
    }
})

buttonAddResolution.addEventListener('click', () =>{
    if(currentPatient.value === 'пациентов нет'){
        inputResolution.value = 'некому ставить диагноз'
    }else {
        localStorage.setItem(`${currentPatient.value}`, inputResolution.value)
    }
})

buttonShowResolution.addEventListener('click', () =>{ 
    showResolution.value = localStorage.getItem(`${searchInputPatient.value}`)
    searchInputPatient.value= null
})

buttonDeleteResolution.addEventListener('click', () =>{ 
    const noResolution = `диагноз удален врачом`
    localStorage.setItem(`${searchInputPatient.value}`, noResolution)
})

window.addEventListener('storage', event => {
    patient = JSON.parse(localStorage.getItem('queue'))
})