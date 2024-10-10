document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this static site, we'll just log to console and show an alert
            console.log('Form submitted');
            alert('Thank you for your message. We will get back to you soon!');
            
            // Clear the form
            contactForm.reset();
        });
    }
});