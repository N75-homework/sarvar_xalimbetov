const $form = document.getElementById('form');
const $editForm = document.getElementById('modal_form');
const $list = document.getElementById('list');
const $errorMessage = document.getElementById('error-message');
const $modal = document.getElementById('modal')
const $overlay = document.getElementById('overlay')
const $sortBtns = document.getElementById('sorting_box')

const $date = document.getElementById('date');
const $second = document.getElementById('second');
const $minute = document.getElementById('minute');
const $hour = document.getElementById('hour');
const $closeModal = document.getElementById('close-icon');


let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
if (todos.length) showTodos()

// set Todos to local storage
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}

// show todos
function showTodos() {
    const todos = JSON.parse(localStorage.getItem('list'))
    $list.innerHTML = ''
    todos.forEach((item, i) => {
        $list.innerHTML += `
        <li class="item">
            <div class="completed">
                <input type="checkbox" class="checked_input">
                <div class="checked"></div>
            </div>
            <span class="item-text">${item.text}</span>

            <div class="icon_edit">
                <i onclick="editTodo(${i})" class="fa-solid fa-pen-to-square fa-lg icon-1"></i>
            </div>
            <div class="icon_del">
                <i onclick="deleteTodos(${i})" class="fa-solid fa-trash fa-lg icon-2"></i>
            </div>
        </li>
        `
    });
}



// show message
function showMessage(where, text) {
    document.getElementById(`${where}`).textContent = text

    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    }, 2500)
}

$form.addEventListener('submit', (e) => {
    e.preventDefault()

    let todoText = $form['todo_input'].value.trim()
    $form.reset()

    if (todoText.length) {
        todos.push({
            text: todoText,
            completed: false
        })
        setTodos()
        showTodos()
    } else {
        showMessage('error-message', 'Please, enter some text...')
    }
})


// checked function
let checkedInput = document.querySelectorAll('.checked_input');
let itemText = document.querySelectorAll('.item-text')
let $item = document.querySelectorAll('.item')

checkedInput.forEach((item, i) => {

    item.addEventListener("change", e => {

        if (item.checked) {
            itemText[i].style.textDecoration = "line-through"
            $item[i].style.opacity = "0.5"
        } else {
            itemText[i].style.textDecoration = "none"
            $item[i].style.opacity = "1"
        }
    })
})


//  delete todos
let deletedTodosArray = []

function deleteTodos(id) {
    let deletedTodos = todos.splice(id, 1)
    deletedTodosArray.push(deletedTodos[id])

    setTodos()
    showTodos()
}

// edit todos

let editItemId;


$editForm.addEventListener('submit', e => {
    e.preventDefault()

    const todoText = $editForm['modal-input'].value.trim()
    $editForm.reset()
    if (todoText.length) {
        todos.splice(editItemId, 1, {
            text: todoText,
            completed: false,
        })
        setTodos()
        showTodos()
        close()
    } else {
        showMessage('edit-message', 'Please, enter some text...')
    }
})


function editTodo(id) {
    open()
    editItemId = id
}

function open() {
    $modal.classList.remove('hidden')
    $overlay.classList.remove('hidden')
}

function close() {
    $modal.classList.add('hidden')
    $overlay.classList.add('hidden')
}

$overlay.addEventListener('click', close)
$overlay.addEventListener('click', close)
$closeModal.addEventListener('click', close)
document.addEventListener('keydown', e => {

    if (e.key == "Escape") {
        close()
    }
})

// deleted todos

todos.forEach((item, i) => {

    $sortBtns.children[2].addEventListener('click', e => {
        e.preventDefault()


    })
});
