document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const expiryDate = document.getElementById('expiryDate');

    // Set minimum expiry date to current month
    const today = new Date();
    const minDate = today.toISOString().slice(0, 7);
    expiryDate.setAttribute('min', minDate);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate all fields
        const isValid = validateForm();
        
        if (isValid) {
            // Form is valid - process submission
            alert('Payment submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const fields = form.querySelectorAll('input, textarea');
        
        fields.forEach(field => {
            if (!field.checkValidity()) {
                showError(field);
                isValid = false;
            } else {
                hideError(field);
            }
        });

        // Additional custom validation for expiry date
        if (expiryDate.value) {
            const selectedDate = new Date(expiryDate.value);
            if (selectedDate < today) {
                showError(expiryDate, 'Please select a future date');
                isValid = false;
            }
        }

        return isValid;
    }

    function showError(field, customMessage = null) {
        const errorMessage = field.nextElementSibling;
        field.classList.add('invalid');
        
        if (customMessage) {
            errorMessage.textContent = customMessage;
        }
        errorMessage.style.display = 'block';
    }

    function hideError(field) {
        field.classList.remove('invalid');
        const errorMessage = field.nextElementSibling;
        errorMessage.style.display = 'none';
    }

    // Real-time validation on input change
    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', function() {
            if (this.checkValidity()) {
                hideError(this);
            }
        });
    });
});