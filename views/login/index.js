
var submit = document.getElementById("submit");

submit.addEventListener("click", checkUser);

function reqListener(){
	console.log(this.response);
}

function checkUser(){
	var user = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var rawjson = { "user":user, "password":password};
	var payload = JSON.stringify(rawjson);
	console.log(`Payload: ${payload}`);
	var checker = new XMLHttpRequest();
	checker.addEventListener("load", reqListener);
	checker.open("POST", "http://localhost:5001/register");
	checker.setRequestHeader("Content-Type", "application/json");
	checker.send(payload);
}

