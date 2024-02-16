
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var isValid = true;

  // Validation for name
  if (!isValidInput(nameInput.value)) {
    isValid = false;
    showError(nameInput);
  } else {
    hideError(nameInput);
  }

  // Validation for email
  if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput);
  } else {
    hideError(emailInput);
  }

  // Validation for message
  if (!isValidInput(messageInput.value) || !messageInput.value.includes('please')) {
    isValid = false;
    showError(messageInput);
  } else {
    hideError(messageInput);
  }

  // Submit the form if valid
  if (isValid) {
    this.submit();
  }
});

function isValidInput(input) {
  // Check for special characters
  return /^[a-zA-Z0-9\s]*$/.test(input);
}

function isValidEmail(email) {
  // Simple email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(element) {
  element.classList.add('error');
}

function hideError(element) {
  element.classList.remove('error');
}
