const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
	e.preventDefault();
	const email = e.target.elements.login;
	const pass1 = e.target.elements.pass1;
	const pass2 = e.target.elements.pass2;
	const accept = e.target.elements.accept;
	const correct = validate(email, pass1, pass2, accept);
	email.labels[0].style.color = '';
	pass1.labels[0].style.color = '';
	pass2.labels[0].style.color = '';
	accept.labels[0].style.color = '';

	if (correct !== null) {
		correct.forEach((el) => {
			const label = el.labels[0];
			label.style.color = 'red';
		});
	} else {
		console.log('Done');
	}
}

function validate(email, pass1, pass2, accept) {
	const errors = [];
	if (!email.value.includes('@')) {
		errors.push(email);
	}

	if (pass1.value !== pass2.value) {
		errors.push(pass1);
		errors.push(pass2);
	} else if (pass1.value.length < 7) {
		errors.push(pass1);
	}

	if (!accept.checked) {
		errors.push(accept);
	}

	return errors.length > 0 ? errors : null;
}
