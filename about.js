console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form sumbitted successfully!`)
}

document.getElementById('duck').addEventListener("mouseover", function(){ alert("Howard the Duck says you're awesome!"); });




let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);
