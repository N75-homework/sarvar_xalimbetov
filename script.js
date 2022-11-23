let $userForm = document.getElementById('user_form')
let $userName = document.getElementById('user_name')
let $userTel = document.getElementById('user_number')
let $userLoc = document.getElementById('user_address')

let $orderSelect = document.getElementById('order-select')
let $size = document.querySelectorAll('.order__radio')
let $product = document.querySelectorAll('.order__checkbox')
let $extraProduct = document.querySelectorAll('.order__extra-checkbox')
let $orderList = document.querySelector('#order_list')
let $checkList = document.querySelector('.check__list')
let $sizeItem = document.querySelector('#size_item')
let $thickness = document.querySelector('#thickness')
let $onPizza = document.querySelector('#on_pizza')
let $extra = document.querySelector('#extra')
let $totalPrice = document.querySelector('#total_price')


let userInfoBox = []
let price = 0

let getThickness = (array, element) => {
    for(let i = 0; i < array.length; i++){
        element.innerHTML = `Dough thickness: ${array.name}`
    }

    
    if(array[0].click){
        price += 10
    }else if(array[1].click){
        price += 12 
    }else if(array[2].click){
        price += 15 
    }
}

let getOrderSize = (array, element) => {
    for(let i = 0; i < array.length; i++){
    
        if(array[0].checked){
            element.innerHTML = `Size: ${array[0].value}`
        } else if(array[1].checked) {
            element.innerHTML = `Size: ${array[1].value}`
        } else if(array[2].checked) {
            element.innerHTML = `Size: ${array[2].value}`
        } else{
            element.innerHTML = `Size: none`
        }
        
    }

    if(array[0].checked){
        price += 10
    } else if(array[1].checked){
        price += 12
    } else if(array[2].checked){
        price += 15 
    }
}

let getProduct = (array, element) => {
    element.innerHTML = null
    for(let i = 0; i < array.length; i++){
        if(array[i].checked){
            element.innerHTML += `${array[i].value}, `
        }
    }
    if(array[0].checked){
        price += 5
    } if(array[1].checked){
        price += 5
    } if(array[2].checked){
        price += 5
    } if(array[3].checked){
        price += 5
    } if(array[4].checked){
        price += 5
    } if(array[5].checked){
        price += 5
    }
}
let getExtra = (array, element) => {
    element.innerHTML = null

    for(let i = 0; i < array.length; i++){
        if(array[i].checked){
            element.innerHTML += `${array[i].value}, `
        }
    }

    if(array[0].checked){
        price += 3
    } if(array[1].checked){
        price += 3
    }
}

let countPrice = () => {
    $totalPrice.textContent = `${price}$`
}



let getUserFunc = function(array, element){
    
    for(let i=0; i<array.length; i++){

        element.innerHTML = `
            <li>Ism: ${array[i].name}</li>
            <li>Tel: +998 ${array[i].tel}</li>
            <li>Address: ${array[i].address}</li>
        `
    }
}


$userForm.addEventListener('submit', e => {
    e.preventDefault()
    
    let getUserInfo = {
        id: userInfoBox.length + 1,
        name: $userName.value.trim(),
        tel: $userTel.value.trim(),
        address: $userLoc.value.trim()
    }
    userInfoBox.push(getUserInfo)    
    getUserFunc(userInfoBox, $checkList)
    getOrderSize($size, $sizeItem)
    getThickness($orderSelect, $thickness)
    getProduct($product, $onPizza)
    getExtra($extraProduct, $extra)
    countPrice()
})
// console.log(price);
// console.log($smallSize.input);
