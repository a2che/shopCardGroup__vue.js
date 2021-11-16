btn = document.querySelector('.add__prod__button')
add__prod__label = document.getElementsByClassName('add__prod__label')
add__prod__input = document.getElementsByClassName('add__prod__input')
errorText = document.getElementsByClassName('errorText')


console.log(add__prod__label)
console.log(add__prod__input)
console.log(errorText)
btn.onclick = function(){
	for(i=0; i < add__prod__label.length; i++) {
		if(add__prod__label[i].classList.contains("disabled") == false){
			btn.classList.remove("active")
			add__prod__input[i].classList.add('error')
			errorText[i].style.display = "block"
			
		}
	}
}





// if(add__prod__label[i].classList.contains('active')){
// 		btn.classList.add('active')
// 	} else{
// 		btn.classList.remove('active')
// 	}