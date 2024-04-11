document.getElementById("signupForm").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var email = emailInput.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error messages
    emailError.textContent = "";

    // Validate email
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        event.preventDefault(); // Prevent form submission
    }
});