const API = 'http://167.235.158.238/students';
const _list = document.getElementById('list');
const _error = document.getElementById('error');
const _addForm = document.getElementById('add-form');
const _editForm = document.getElementById('edit-form');
const _closeBtn = document.getElementById('close-btn');
const _editModal = document.getElementById('edit-student-modal')
const _addDataModal = document.getElementById('add-student-modal')
const _status = document.getElementById('status')
const _count = document.querySelector('.count')

let date = new Date()
const realDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
const HIGHEST_SCORE = 150



async function data() {

    try {
        const response = await fetch(API)
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error.message);
    }
}

data()
    .then((data) => addData(data) )
    .catch((error) => {
        console.log(error.message);
        _error.style.visibility = 'visible'
    })


function countMark(mark) {

    if (mark && mark <= 150) {
        const result = (Number(mark) * 100) / 150
        return `${result.toFixed(0)}%`
    } else {
        return 'NaN'
    }
}

function addData(info) {

    return info.forEach((item) => {
        _list.innerHTML += `
        <li class="item">
            <span class="number">${item.id}</span>
            <h1 class="title">${item.name} ${item.lastName}</h1>
            <p class="date">${realDate}</p>
            <span class="mark">${countMark(item.mark)}</span>
            <p class="status" id="status">${item.mark >= 90 ? 'Pass' : 'Fail'}</p>
            <button class="edit" onclick="editData(${item.id})">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="del" onclick="deleteData(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>
        `
    })

}

// add
async function createData(data) {

    const response = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(data => {
        _list.innerHTML += `
        <li class="item">
            <span class="number">${data.id}</span>
            <h1 class="title">${data.name} ${data.lastName}</h1>
            <p class="date">${realDate}</p>
            <span class="mark">${countMark(data.mark)}</span>
            <p class="status" id="status">${countMark(data.mark) > 40 ? 'Pass' : 'Fail'}</p>
            <button class="edit" onclick="editData(${data.id})">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="del" onclick="deleteData(${data.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>
    `
    })
}

_addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let {
        name,
        lastname,
        mark
    } = e.target.elements

    let newData = {
        name: name.value,
        lastName: lastname.value,
        markedDate: realDate,
        mark: mark.value,
    }
    createData(newData)
    
    _addDataModal.style.display = 'none'
    document.querySelector('.modal-backdrop').style.display = 'none'
})


// delete
async function deleteData(id) {
    
    _list.innerHTML = ''
    try {
        await fetch(`http://167.235.158.238/students/${id}`, {
            method: 'DELETE',
        });
        
        addData(await data())
    } catch (error) {
        alert(error.message);
    }
}

// edit


async function editData(id) {
    _editModal.style.display = 'block'
}

_closeBtn.addEventListener('click', () =>{
    _editModal.style.display = 'none'
})
