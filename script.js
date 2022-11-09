var address = document.getElementById('address');
var gmail = document.getElementById('gmail');
var tel = document.getElementById('tel');
var firstLan = document.getElementById('firstLan');
var secondLan = document.getElementById('secondLan');
var thirdLan = document.getElementById('thirdLan');
var fullname = document.getElementById('fullname');
var job = document.getElementById('job');
var school = document.getElementById('school');
var universityName = document.getElementById('universityName');
var university = document.getElementById('university');
var work = document.getElementById('work');
var experience = document.getElementById('experience');

var getFullname = prompt("To'liq ism-familiyangizni kiriting: ", 'Palonchi Palonchiyev');
fullname.textContent = getFullname;

var getJob = prompt("Kasbingizni kiriting: ", 'Kasbingiz');
job.textContent = getJob;

var getAddress = prompt("Yashash joyingizni kiriting:", 'Tashkent');
address.textContent = getAddress;

var getTel = prompt("Telefon raqamingizni kiriting:", +998) -0
tel.textContent = getTel;

var getGmail = prompt("Gmail manzilingizni kiriting:", 'masalan@gmail.com');
gmail.textContent = getGmail

var getFirstLan = prompt("Asosiy tilingizni kiriting:", "o'zbek tili");
firstLan.textContent = getFirstLan

var getSecondLan = prompt("Qo'shimcha tilni kiriting:", "ingliz tili");
secondLan.textContent = getSecondLan

var getThirdLan = prompt("Uchinchi tilni kiriting:", 'rus tili');
thirdLan.textContent = getThirdLan

var getSchool = prompt("Maktabda o'qigan yillaringizni kiriting:", "2010-2021 yoki 2015-hozir");
school.textContent = `Maktab: ${getSchool}`

var getUniversityName = prompt("Qaysi universitetda o'qigansiz:", 'TATU');
universityName.textContent = getUniversityName

var getUniversity = prompt("Universitetda nechanchi yillarda o'qigansiz o'qigansiz:", '2018-2022');
university.textContent = getUniversity

var getWork = prompt("Qaysi komponiyada ishlagansiz:", 'EPAM');
work.textContent = getWork

var getExperience = prompt("Komponiyada nechanchi yillarda ishlagansiz:", '2008-2020 yoki 2012-hozir');
experience.textContent = getExperience




