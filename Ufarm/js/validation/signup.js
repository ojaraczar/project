// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get the form and error container
    const form = document.querySelector("form");
    const errorContainer = document.getElementById("errors");
  
    // Add event listeners to each input field
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const mobile = document.getElementById("mobile");
    const password = document.getElementById("password");
  
    name.addEventListener("input", () => {
      validateName();
    });
  
    email.addEventListener("input", () => {
      validateEmail();
    });
  
    address.addEventListener("input", () => {
      validateAddress();
    });
  
    mobile.addEventListener("input", () => {
      validateMobile();
    });
  
    password.addEventListener("input", () => {
      validatePassword();
    });
  
    // Define validation functions
    function validateName() {
      const nameRegex = /^[a-zA-Z0-9 ]{5,50}$/;
      if (!nameRegex.test(name.value)) {
        showError("Please enter a valid name. Must be alphanumeric and between 5 to 50 characters.");
      } else {
        clearError();
      }
    }
  
    function validateEmail() {
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRegex.test(email.value)) {
        showError("Please enter a valid email address.");
      } else {
        clearError();
      }
    }
  
    function validateAddress() {
      if (address.value.length < 10) {
        showError("Please enter a valid address. Must be at least 10 characters long.");
      } else {
        clearError();
      }
    }
  
    function validateMobile() {
      if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(mobile.value)) {
        showError("Please enter a valid mobile number. Format: 123-456-7890");
      } else {
        clearError();
      }
    }
  
    function validatePassword() {
      if (password.value.length < 8) {
        showError("Password must be at least 8 characters long");
      } else {
        clearError();
      }
    }
  
    // Define helper functions
    function showError(errorMessage) {
      errorContainer.innerHTML = errorMessage;
    }
  
    function clearError() {
      errorContainer.innerHTML = "";
    }
  
    // Add submit event listener to form
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Validate all fields
      validateName();
      validateEmail();
      validateAddress();
      validateMobile();
      validatePassword();
  
      // Display errors or submit form
      if (errorContainer.innerHTML !== "") {
        // Display errors
        form.classList.add("was-validated");
      } else {
        // Submit form
        form.submit();
      }
    });
  });
  