let wrapper = document.getElementsByClassName('wrapper');
console.log(wrapper);
let move = document.getElementsByClassName('move');
console.log(move);
let len = wrapper.length;

for(let i = 0; i < len; i++){
    wrapper[i].addEventListener('click', e => {
        e.preventDefault()

        wrapper[i].classList.toggle('active');

        if(move[i].style.maxHeight){
            move[i].style.maxHeight = null;
        } else{
            move[i].style.maxHeight = move[i].scrollHeight + 'px'
        }
    })
}