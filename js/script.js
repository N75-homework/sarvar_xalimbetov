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
            <span class="item-text">${input}</span>
            <div class="icon">
                <i class="fa-solid fa-square-check icon-1"></i>
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