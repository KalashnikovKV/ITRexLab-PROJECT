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

const patient = JSON.parse(localStorage.getItem('doctor'))

buttonNext.addEventListener('click', () =>{ 
    console.log(patient.length)
    if(patient.length == 0){
        console.log('пациентов нет')
        currentPatient.value = 'пациентов нет'
    }
    if(patient.length == 1){
        localStorage.setItem(`${patient[patient.length-1]}`, 'врач осматривает пациента')
        currentPatient.value = patient[patient.length-1]
        patient.pop(patient[patient.length-1])
    }
    if(patient.length >= 2){
        localStorage.setItem(`${patient[patient.length-1]}`, 'врач осматривает пациента')
        currentPatient.value = patient[patient.length-1]
        patient.pop(patient[patient.length-1])
    }
})

buttonAddResolution.addEventListener('click', () =>{
    localStorage.setItem(`${currentPatient.value}`, inputResolution.value)
})

buttonShowResolution.addEventListener('click', () =>{ 
    showResolution.value = localStorage.getItem(`${searchInputPatient.value}`)
})

buttonDeleteResolution.addEventListener('click', () =>{ 
    const noResolution = `диагноз удален врачом`
    localStorage.setItem(`${searchInputPatient.value}`, noResolution)
})

