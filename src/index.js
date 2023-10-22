let button = document.querySelector('button')
let text = document.querySelector('.text')

button.onclick = function() {
    console.log('Click')
    text.style.visibility = "visible";
    //text.classList.toggle('text-expanded');
    setTimeout(() => {
		text.classList.add('text-expanded');
	}, 1000);
}
