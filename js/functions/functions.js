export function render(data, element){
    element.innerHTML = ''
    data.forEach(item => {
        element.innerHTML += `
        <li class="item" id="item">
            <div class="img_box">
                <img src='${item.img}' alt="" class="item_img">
            </div>
            <div class="info_box">
                <div class="name_box">
                    <h1>${item.name}</h1>
                    <button class="like_icon"><i class="fa-solid fa-heart fa-xl"></i></button>
                </div>
                <div class="type_box">
                    <p>${item.type}</p>
                </div>
                <div class="number_info">
                    <p>${item.weight}</p>
                    <p>${item.avg_spawns} age</p>
                </div>
            </div>
        </li>
        `
    });
}

export function typeRender(data){
    let typeEl;
    let typeSortArray = [];

    data.forEach((item) => {
        item.type.forEach(item => {
            typeEl = item
        })
        typeSortArray.push(typeEl)
    })
    
    let typeArray = [...new Set(typeSortArray)];
    typeArray.unshift('All')

    return typeArray
}

export function changeRender(data, el){
    el.innerHTML += `
        <li class="item" id="item">
            <div class="img_box">
                <img src='${data.img}' alt="" class="item_img">
            </div>
            <div class="info_box">
                <div class="name_box">
                    <h1>${data.name}</h1>
                    <button class="like_icon"><i class="fa-solid fa-heart fa-xl"></i></button>
                </div>
                <div class="type_box">
                    <p>${data.type}</p>
                </div>
                <div class="number_info">
                    <p>${data.weight}</p>
                    <p>${data.avg_spawns} age</p>
                </div>
            </div>
        </li>
    `
}

export let localStorageData = JSON.parse(localStorage.getItem('list')) 
    ? JSON.parse(localStorage.getItem('list')) 
    : []

export function setData() {
    localStorage.setItem('list', JSON.stringify(localStorageData))
}


export function isLike(element, data) {
    let likedArray = []

    element.forEach((item) => {
        item.addEventListener('click', e => {

            if(item.style.color == 'red'){
                item.style.color = 'gray'
            } else{
                item.style.color = 'red'

            }
        })
    })

}