document.addEventListener('DOMContentLoaded', function() {
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    const submitButton = addEmployeeForm.querySelector('button[type="submit"]');
    let isSubmitting = false; // Add a flag to prevent double submission

    addEmployeeForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        if (isSubmitting) return; // Prevent further submissions while in progress

        isSubmitting = true; // Set the flag to true

        // Gather form data
        const formData = new FormData(addEmployeeForm);
        const data = Object.fromEntries(formData);

        // Log the form data for debugging
        console.log('Form Data:', data);

        // Check for empty fields
        if (!data.first_name || !data.last_name || !data.email || !data.position || !data.department || !data.salary) {
            alert("Please fill out all fields."); // Show alert if any field is empty
            submitButton.disabled = false; // Re-enable button after validation
            isSubmitting = false; // Reset the flag to allow submission again
            return; // Stop submission
        }

        // Send AJAX request
        fetch('/api/employees/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convert the data object to JSON string
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    alert(`Error: ${errorData.message}`); // Show error alert from server response
                    submitButton.disabled = false; // Re-enable button after error
                    isSubmitting = false; // Reset the flag to allow submission again
                    throw new Error('Bad request');
                });
            }
            return response.json(); // Parse response as JSON
        })
        .then(data => {
            console.log('Success:', data);
            alert(`Success: ${data.message}`); // Show success alert
            addEmployeeForm.reset(); // Reset the form
            submitButton.disabled = false; // Re-enable button after success
            isSubmitting = false; // Reset the flag to allow further submissions
        })
        .catch(error => {
            console.error('Error:', error); // Log the error for debugging
            submitButton.disabled = false; // Re-enable button after error
            isSubmitting = false; // Reset the flag to allow further submissions
        });
    });
});