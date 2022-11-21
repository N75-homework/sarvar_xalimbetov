let $openEye = document.getElementById('openEye');
let $closeEye = document.getElementById('closeEye');
let $password = document.getElementById('password');

$openEye.addEventListener('click', e => {
    e.preventDefault()
    
    $password.type = 'password'
    $openEye.style.display = 'none'
    $closeEye.style.display = 'block'
})
$closeEye.addEventListener('click', e => {
    e.preventDefault()
    
    $password.type = 'text'
    $openEye.style.display = 'block'
    $closeEye.style.display = 'none'
})

