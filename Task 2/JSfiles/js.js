
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.addEventListener('click', btnActivator);
span.addEventListener('click', closeModal);
modal.addEventListener('click', outsideClick);

function btnActivator() {
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display='none';
}

function outsideClick(e) {
	if(e.target == modal){
		modal.style.display = 'none';
	}
}