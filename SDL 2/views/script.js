
    document.addEventListener('DOMContentLoaded', function() {
        const addEmployeeForm = document.getElementById('addEmployeeForm');
    
        addEmployeeForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
    
            // Gather form data
            const formData = new FormData(addEmployeeForm);
            const data = Object.fromEntries(formData);
    
            // Log the form data for debugging
            console.log('Form Data:', data);
    
            // Check for empty fields
            if (!data.first_name || !data.last_name || !data.email || !data.position || !data.department || !data.salary) {
                alert("Please fill out all fields."); // Show alert if any field is empty
                return; // Stop submission
            }
    
            // Disable the submit button to prevent multiple submissions
            const submitButton = addEmployeeForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
    
            // Send AJAX request
            fetch('/api/employees/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        // Show error alert from server response
                        alert(`Error: ${errorData.message}`);
                        throw new Error('Bad request');
                    });
                }
                return response.json(); // Parse response as JSON
            })
            .then(data => {
                console.log('Success:', data);
                alert(`Success: ${data.message}`); // Show success alert
                addEmployeeForm.reset(); // Reset the form
            })
            .catch(error => {
                console.error('Error:', error); // Log the error for debugging
            })
            .finally(() => {
                // Re-enable the submit button after the request completes
                submitButton.disabled = false;
            });
        });
    });
    