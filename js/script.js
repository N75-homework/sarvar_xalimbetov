const $form = document.getElementById('form');
const $editForm = document.getElementById('editForm');
const $list = document.getElementById('list');

const $date = document.getElementById('date');
const $second = document.getElementById('second');
const $minute = document.getElementById('minute');
const $hour = document.getElementById('hour');

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

// funtion

function setValue(){
    
    $list.innerHTML += `
    <li class="item">
        <div class="completed">
            <input type="checkbox" class="checked_input">
            <div class="checked"></div>
        </div>
        <span class="item-text">Lorem ipsum dolor sit amet con</span>
        <div class="icon">
            <i class="fa-solid fa-trash fa-lg icon-2"></i>
        </div>
    </li>
    `
}


let input;
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    input =  $form['todo_input'].value.trim()
    
    if(input.length){
        setValue()
    }
    
})