let n1 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n2 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n3 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n4 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n5 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n6 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n7 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n8 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n9 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();
let n10 = prompt("Ma'lumot kiriting:").toLocaleLowerCase();

let array = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
let numberArray = []
let stringArray = []


let $arrayNumber = document.getElementById('numberArray')
let $arrayString = document.getElementById('stringArray')

for (let i = 0; i < array.length; i++) {

    if (isNaN(array[i])) {
        stringArray.push(array[i])
        $arrayString.textContent = stringArray.sort()
    } else {
        numberArray.push(array[i])
        $arrayNumber.textContent = numberArray.sort((a, b) => a - b);
    }
}