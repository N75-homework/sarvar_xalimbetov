var $fullname = document.querySelector('#fullname');
var $job = document.querySelector('#job');
var $call = document.querySelector('#call');
var $email = document.querySelector('#email');
var $tme = document.querySelector('#tme');
var $location = document.querySelector('#location');
var $school_year = document.querySelector("#school_year");
var $school = document.querySelector("#school");
var $university_year = document.querySelector("#university_year");
var $university = document.querySelector("#university");
var $lan1 = document.querySelector('#lan1');
var $lan2 = document.querySelector('#lan3');
var $lan3 = document.querySelector('#lan3');
var $percent1 = document.querySelector('#precent-1');
var $percent2 = document.querySelector('#precent-2');
var $percent3 = document.querySelector('#precent-3');
var $percent4 = document.querySelector('#precent-4');
var $percent5 = document.querySelector('#precent-5');
var $percent6 = document.querySelector('#precent-6');
var $profil_ava = document.querySelector(".profil_ava");

var $resume = document.querySelector('#resume')
var $form = document.getElementById('form')
var $body = document.body

$form.addEventListener('submit', e => {
    e.preventDefault()

    $fullname.textContent = inputName.value.trim()
    $job.textContent = inputJob.value.trim()
    $call.textContent = `+${inputCall.value.trim().slice(0,3)} ${inputCall.value.trim().slice(3,5)} ${inputCall.value.trim().slice(5,8)} ${inputCall.value.trim().slice(8,10)} ${inputCall.value.trim().slice(10,12)}`
    $email.textContent = inputEMail.value.trim()
    $tme.textContent = inputTme.value.trim()
    $location.textContent = inputAddress.value.trim()
    $school_year.textContent = inputSchool.value.trim()
    $school.textContent = inputSchoolYear.value.trim()
    $university_year.textContent = inputUniversityYear.value.trim()
    $university.textContent = inputUniversity.value.trim()
    $lan1.textContent = inputLanguageN1.value.trim()
    $lan2.textContent = inputLanguageN2.value.trim()
    $lan3.textContent = inputLanguageN3.value.trim()
    $profil_ava.innerHTML = `
        <img src=${inputLink.value.trim()} alt="" class="profil_photo">
    `

    $resume.style.display = 'flex'
    $resume.style.backgroundColor = 'transparent'
    $form.style.display = 'none'
    $body.style.backgroundColor = 'lightblue'
})