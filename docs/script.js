
document.getElementById('myForm').addEventListener('submit', function(event) {
// Prevent the default form submission
event.preventDefault();

// Get form inputs
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var isValid = true;

// Validation criteria
var nameInput = formData.get('name');
var emailInput = formData.get('email');
var messageInput = formData.get('message');
if (nameInput.value.trim() === '') {
isValid = false;
nameInput.classList.add('error');
} else {
nameInput.classList.remove('error');
}

if (!isValidEmail(emailInput.value.trim())) {
isValid = false;
emailInput.classList.add('error');
} else {
emailInput.classList.remove('error');
}

if (!messageInput.value.includes('please')) {
isValid = false;
messageInput.classList.add('error');
} else {
messageInput.classList.remove('error');
}

// Submit the form if valid
if (isValid) {
this.submit();
}
});


function isValidEmail(email) {
// Simple email validation regex
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
