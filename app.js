console.log("Welcome to TBS Hotel");
// Get the form element and cast it to its respective type
var guestform = document.querySelector('form');
// Get the input elements and cast them to their respective types
var guestnameInput = document.getElementById('name');
var guestemailInput = document.getElementById('email');
var guestcheckInInput = document.getElementById('check-in');
var guestcheckOutInput = document.getElementById('check-out');
var guestroomTypeSelect = document.getElementById('room-type');
var guestnumGuestsInput = document.getElementById('num-guests');
// Define a function to validate the form inputs
function validateForm() {
    if (!guestnameInput.value.trim()) {
        alert('Please enter your name');
        return false;
    }
    if (!guestemailInput.value.trim()) {
        alert('Please enter your email address');
        return false;
    }
    if (!guestcheckInInput.value.trim()) {
        alert('Please enter a check-in date');
        return false;
    }
    if (!guestcheckOutInput.value.trim()) {
        alert('Please enter a check-out date');
        return false;
    }
    if (!guestroomTypeSelect.value) {
        alert('Please select a room type');
        return false;
    }
    if (!guestnumGuestsInput.value) {
        alert('Please enter the number of guests');
        return false;
    }
    return true;
}
// Add an event listener to the form to validate it before submission
guestform.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
