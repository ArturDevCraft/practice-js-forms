const userList = document.querySelector('.users-list');
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
	const firstName = e.target.elements.firstName.value;
	const lastName = e.target.elements.lastName.value;
	addUser(firstName, lastName, userList);
	e.target.reset();
}

function addUser(firstName, lastName, parent) {
	if (firstName && lastName) {
		const li = document.createElement('li');
		li.classList.add('users-list__person');
		li.textContent = `${firstName} ${lastName}`;
		parent.appendChild(li);
	}
}
