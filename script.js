let $red = document.querySelector('.redLight')
let $yellow = document.querySelector('.yellowLight')
let $green = document.querySelector('.greenLight')
let $btn = document.querySelector('.btn')
let $title = document.querySelector('.title')

let rec = new webkitSpeechRecognition();


$btn.addEventListener('click', e => {
    rec.start()
    rec.lang = 'Uz-uz'
    // rec.lang = 'ru'
    // rec.lang = 'en'

    // rec.onend = e => {
    //     alert('Aloqa tugadi')           
    // }

    rec.onresult = e => {
        let result = e.results[0][0].transcript
        $title.textContent = result

        if(result === "qizil"){
            $red.style.backgroundColor = 'red'
            $yellow.style.backgroundColor = '#fff'
            $green.style.backgroundColor = '#fff'  

        } else if(result === "sariq"){
            $yellow.style.backgroundColor = 'yellow'
            $red.style.backgroundColor = '#fff'
            $green.style.backgroundColor = '#fff'  

        } else if(result ==="yashil"){
            $green.style.backgroundColor = 'green'  
            $red.style.backgroundColor = '#fff'
            $yellow.style.backgroundColor = '#fff'
        }
    }

})