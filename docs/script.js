document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Get form inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
  
    // Validation criteria
    var formData = new FormData(event.target);
    var nameValue = formData.get('name');
    var emailValue = formData.get('email');
    var messageValue = formData.get('message');
  
    // Reset previous error states
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    messageInput.classList.remove('error');
  
    // Initialize error message
    var errorMessage = '';
  
    // Validate name
    if (!isValidName(nameValue)) {
      nameInput.classList.add('error');
      nameInput.style.border = '2px solid red'; // Add red border
      errorMessage += 'Name should not contain special characters.\n';
    }
  
    // Validate email
    if (!isValidEmail(emailValue.trim())) {
      emailInput.classList.add('error');
      emailInput.style.border = '2px solid red'; // Add red border
      errorMessage += 'Please enter a valid email address.\n';
    }
  
    // Validate message
    if (!isValidMessage(messageValue)) {
      messageInput.classList.add('error');
      messageInput.style.border = '2px solid red'; // Add red border
      errorMessage += 'Message should not contain special characters.\n';
    }
  
    // Display error message if there are validation errors
    if (errorMessage !== '') {
      alert(errorMessage);
      return; // Prevent further execution of the submit handler
    }
  
    // Submit the form if all inputs are valid
    event.target.submit();
  });
  
  function isValidName(name) {
    // Allow only alphanumeric characters and spaces
    return /^[a-zA-Z0-9\s]*$/.test(name);
  }
  
  function isValidEmail(email) {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidMessage(message) {
    // Allow only alphanumeric characters, spaces, and punctuation marks
    return /^[a-zA-Z0-9\s.,!?]*$/.test(message);
  }
  
