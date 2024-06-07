document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to be fully loaded before executing JavaScript code
    
    // Add event listener to the form submit event
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        var formData = new FormData(this);
        
        // Log form data to the console
        console.log('Form Data:', formData);
        
        // Display a success message
        alert('Thank you for your submission!');
        
        // Reset the form after submission
        this.reset();
    });
});
