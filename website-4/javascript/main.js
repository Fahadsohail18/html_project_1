const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const howmuchField = document.querySelector('#howmuch');
const messageField = document.querySelector('#message');

function submitForm(event) {

	event.preventDefault();

	if (emailField.value != '' && nameField.value != '' && howmuchField.value != '' && messageField.value != '') {
		const formSubmitDiv = document.querySelector('#form-submit-msg-div');
		formSubmitDiv.style.display = 'block';
	} else {
		if (nameField.value == '') {
			const nameFieldErr = document.querySelector('#name-err');
			nameFieldErr.style.display = 'inline';
		}

		if (emailField.value == '') {
			const emailFieldErr = document.querySelector('#email-err');
			emailFieldErr.style.display = 'inline';
		}

		if (howmuchField.value == '') {
			const howmuchFieldErr = document.querySelector('#howmuch-err');
			howmuchFieldErr.style.display = 'inline';
		}

		if (messageField.value == '') {
			const messageFieldErr = document.querySelector('#message-err');
			messageFieldErr.style.display = 'inline';
		}
	}
}

function onFocusOut(event) {

	if (event.target.name === 'name') {
		if (event.target.value != '') {
			const nameFieldErr = document.querySelector('#name-err');
			nameFieldErr.style.display = 'none';
		}
	}

	if (event.target.name === 'email') {
		if (event.target.value != '') {
			const emailFieldErr = document.querySelector('#email-err');
			emailFieldErr.style.display = 'none';
		}
	}

	if (event.target.name === 'howmuch') {
		if (event.target.value != '') {
			const howmuchFieldErr = document.querySelector('#howmuch-err');
			howmuchFieldErr.style.display = 'none';
		}
	}

	if (event.target.name === 'message') {
		if (event.target.value != '') {
			const messageFieldErr = document.querySelector('#message-err');
			messageFieldErr.style.display = 'none';
		}
	}
}

const btn = document
	.querySelector('.form-button-submit')
	.addEventListener('click', (e) => {
		submitForm(e);
	});

nameField.addEventListener('focusout', (e) => {
	onFocusOut(e);
});

emailField.addEventListener('focusout', (e) => {
	onFocusOut(e);
});

howmuchField.addEventListener('focusout', (e) => {
	onFocusOut(e);
});

messageField.addEventListener('focusout', (e) => {
	onFocusOut(e);
});

// const btn = document.querySelector('.form-main').addEventListener('submit', (e) => {
// 	submitForm(e);
// });