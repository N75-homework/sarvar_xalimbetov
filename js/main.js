const API = 'http://167.235.158.238/students';
const _list = document.getElementById('list');
const _error = document.getElementById('error');
const _addForm = document.getElementById('add-form');
const _addDataModal = document.getElementById('add-student-modal')
const _editForm = document.getElementById('edit-form');
const _editModal = document.getElementById('edit-student-modal')
const _closeBtn = document.getElementById('close-btn');
const _status = document.getElementById('status')
const _count = document.querySelector('.count')
const _totalMark = document.querySelector('.text-end')

let date = new Date()
const realDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
const HIGHEST_SCORE = 100


// fetch
async function data() {

    try {
        const response = await fetch(API)
        const body = await response.json()
        addData(await body)
        return await body
    } catch (error) {
        addData(students)
    }
}
data()



// count
function countMark(mark) {

    if (mark && mark <= 100) {
        const result = (Number(mark) * 100) / HIGHEST_SCORE
        return `${result.toFixed(0)}%`
    } else if(mark && mark > 100){
        return `100%`
    }
}

//render
function addData(info) {
    _count.innerHTML = `Count: ${info.length}`
    _list.innerHTML = null

    return info.forEach((item, id) => {
        _list.innerHTML += `
        <li class="item">
            <span class="number">${item.id}</span>
            <h1 class="title">${item.name} ${item.lastName}</h1>
            <p class="date">${realDate}</p>
            <span class="mark">${countMark(item.mark)}</span>
            <p class="status" id="status">${item.mark > 59 ? 'Pass' : 'Fail'}</p>
            <button class="edit" onclick="editData(${item.id}, ${id})">
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

    await fetch(API, {
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
            <p class="status" id="status">${data.mark > 60 ? 'Pass' : 'Fail'}</p>
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
        markDate: realDate,
        mark: mark.value,
    }
    createData(newData)
    
    _addForm.reset()
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
        
        await data()
    } catch (error) {
        alert(error.message);
    }
}


// edit
async function editData(id, itemId) {
    _editModal.style.display = 'block'

    let {edit_name, edit_lName, edit_mark} = _editForm.elements

    let name = data().then((data) => data[itemId].name)
    let lastName = data().then((data) => data[itemId].lastName)
    let mark = data().then((data) => data[itemId].mark)


    edit_name.value = `${await name}`
    edit_lName.value = `${await lastName}`
    edit_mark.value = `${await mark}`

    _editForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        _editModal.style.display = 'none'
        

        const response = await fetch(API + `/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: edit_name.value.trim(),
                lastName: edit_lName.value.trim(),
                mark: edit_mark.value.trim()
            })
        })
        if(await response){
            data(API)
        }else{
            alert("xatolik editda")
        }

    })
}

_closeBtn.addEventListener('click', () =>{
    _editModal.style.display = 'none'
})

