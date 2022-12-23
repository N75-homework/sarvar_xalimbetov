import {pokemons, colors} from './data.js';
import {render, typeRender, changeRender, isLike, localStorageData} from './functions/functions.js';
import {_list, _typeSelect, _selectType, _selectFilt, _search, _likeBtn} from './dom/dom.js';

//render
render(pokemons, _list)


// types select render
const typeArr = typeRender(pokemons)
typeArr.forEach((item) => {
	let _option = document.createElement('option')
	_option.innerText = item
	_option.value = item
	_selectType.append(_option)
})

_selectType.addEventListener('change', e => {
	e.preventDefault()
    let changedEl = e.target.value
    _list.innerHTML = null

	pokemons.forEach((item) => {
        
		if (changedEl === "All") {
			changeRender(item, _list)

		}
        else if(item.type.includes(changedEl)){
            changeRender(item, _list)
        }
        else {
			_list.innerHTML += ``
		}

	})
})  


// input render
_search.addEventListener('keyup', e => {
	e.preventDefault()
	_list.innerHTML = null

	pokemons.forEach(item => {
		if (item.name.toLowerCase().trim().includes(_search.value.toLowerCase().trim())) {
            changeRender(item, _list)
		}
        else {
            _list.innerHTML += ``
		}
	})
})


// A-Z select render
let getFilt;
let filtArray = ['Filter', 'A - Z', 'Z - A'];


filtArray.forEach((item) => {
	let _optionFilt = document.createElement('option')
	_optionFilt.innerText = item
	_optionFilt.value = item
	_selectFilt.append(_optionFilt)
	
})

_selectFilt.addEventListener('change', () => {
	_list.innerHTML = null

	
	if(_selectFilt[1].selected){
		let result = pokemons.sort((a, b) => a.name > b.name ? 1 : -1)
		result.forEach(item => {
            changeRender(item, _list)
		})	

	} 
	else if(_selectFilt[2].selected){
		let result = pokemons.sort((a, b) => a.name > b.name ? -1 : 1)
		result.forEach(item => {
			changeRender(item, _list)
		})

	} 
    else if(_selectFilt[0].selected){
		render(pokemons, _list)	
	}
})

const _like = document.querySelectorAll('.like_icon')
isLike(_like, pokemons)
