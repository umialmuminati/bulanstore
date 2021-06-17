var email = document.forms['form']['email'];
var phone = document.forms['form']['phone'];
var address = document.forms['form']['address'];
var password = document.forms['form']['password'];
var agreement = document.forms['form']['agreement'];

var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var address_error = document.getElementById('address_error');
var pass_error = document.getElementById('pass_error');
var agreement_error = document.getElementById('agreement_error');

email.addEventListener('textInput', email_verify);
phone.addEventListener('textInput', phone_verify);
address.addEventListener('textInput', address_verify);
password.addEventListener('textInput', password_verify);
agreement.addEventListener('change', agreement_verify);

function validated(){
	if (email.value.length < 9){
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		return false;
	}

	if (phone.value.length < 5){
		phone.style.border = "1px solid red";
		phone_error.style.display = "block";
		return false;
	}

	if (address.value.length < 9){
		address.style.border = "1px solid red";
		address_error.style.display = "block";
		return false;
	}

	if (password.value.length < 8){
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		return false;
	}

	if (agreement.checked == false){
		agreement_error.style.display = "block";
		return false;
	}
}

function email_verify(){
	if (email.value.length >= 8){
		email.style.border = "1px solid black";
		email_error.style.display = "none";
		return true;
	}
}

function phone_verify(){
	if(phone.value.length >= 5){
		phone.style.border = "1px solid black";
		phone_error.style.display = "none";
		return true;
	}
}

function address_verify(){
	if (address.value.length >= 8){
		address.style.border = "1px solid black";
		address_error.style.display = "none";
		return true;
	}	
}

function password_verify(){
	if (password.value.length >= 8){
		password.style.border = "1px solid black";
		pass_error.style.display = "none";
		return true;
	}		
}

function agreement_verify(){
	if (agreement.checked == true){
		agreement_error.style.display = "none";
		return true;
	}
}
