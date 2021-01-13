// Btn 

let btn = document.querySelector("#btn-entrar");

btn.addEventListener("click",function (event) {
	
	event.preventDefault();

	let form = document.querySelector('.form-login');

	// Input email
	let email = form.email.value;

	// Campo para mostrar a mensagem de erro
	let msgEmail = document.querySelector('#msg-email');
	
	if (email === "") {
		msgEmail.innerHTML = "Preencha o campo e-mail!";
		form.email.classList.add('valida');
	}else{
		form.email.classList.remove('valida');
		msgEmail.innerHTML = "";
	}

	// Input senha
	let senha = form.senha.value;

	// Campo para mostrar a mensagem de erro
	let msgSenha = document.querySelector('#msg-senha');
	
	if (senha === "") {
		msgSenha.innerHTML = "Preencha o campo senha!";
		form.senha.classList.add('valida');

	}else{
		msgSenha.innerHTML = "";
		form.senha.classList.remove('valida');
	}

});