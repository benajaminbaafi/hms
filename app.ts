console.log("Welcome to TBS Hotel");
// Get the form element and cast it to its respective type
const guestform = document.querySelector('form') as HTMLFormElement;

// Get the input elements and cast them to their respective types
const guestnameInput = document.getElementById('name') as HTMLInputElement;
const guestemailInput = document.getElementById('email') as HTMLInputElement;
const guestcheckInInput = document.getElementById('check-in') as HTMLInputElement;
const guestcheckOutInput = document.getElementById('check-out') as HTMLInputElement;
const guestroomTypeSelect = document.getElementById('room-type') as HTMLSelectElement;
const guestnumGuestsInput = document.getElementById('num-guests') as HTMLInputElement;

// Define a function to validate the form inputs
function validateForm():boolean {
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
guestform.addEventListener('submit', (event) => {
	if (!validateForm()){
		event.preventDefault();
	}
});
