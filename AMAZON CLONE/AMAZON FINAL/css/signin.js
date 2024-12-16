const form = document.getElementById('form');
const emailOrPhone = document.getElementById('email');

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    validateInput();    // Call validation function
});

// Function to set error messages
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to set success
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to check if input is a valid email
const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(input).toLowerCase());
};

// Function to check if input is a valid phone number
const isValidPhone = (input) => {
    const phoneRegex = /^\+?[0-9]{10}$/; 
    return phoneRegex.test(String(input));
};

// Function to validate input
const validateInput = () => {
    const inputValue = emailOrPhone.value.trim();

    if (inputValue === '') {
        setError(emailOrPhone, 'Email or phone number is required');
    } else if (!isValidEmail(inputValue) && !isValidPhone(inputValue)) {
        setError(emailOrPhone, 'Provide a valid email or phone number');
    } else {
        setSuccess(emailOrPhone);
        console.log('Form submitted successfully');
        redirectToIndex();
    }
};

const redirectToIndex = () => {
    window.location.href = 'index.html';
};