//<script>


const searchIcon = document.querySelector('.search-icon');
const form = document.querySelector('form');
const input = form.querySelector('input[name="q"]');

searchIcon.addEventListener('click', (event) => {
  event.preventDefault();
  form.submit();
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    form.submit();
  }
});
//</script>


//<!-- Login form behavior -->
// //<script>
// $(document).ready(function() {
//     $("#userType").change(function() {
//         var selectedOption = $(this).children("option:selected").val();
//         if (selectedOption === "customer") {
//             $("#userID").replaceWith('<input type="email" class="form-control" id="email" placeholder="Email">');
//             $("#passwordInput").html('<label for="password">Password</label><input type="password" class="form-control" id="password" placeholder="Password">');
//         } else {
//             $("#userID").replaceWith('<input type="text" class="form-control" id="userID" placeholder="User ID">');
//             $("#passwordInput").html('<label for="password">Password</label><input type="password" class="form-control" id="password" placeholder="Password">');
//         }
//     });
// });
// //</script>
$(document).ready(function() {
  // existing code here

  // form validation
  $("form").submit(function(event) {
      var userType = $("#userType").val();
      var userID = $("#userID").val();
      var password = $("#password").val();
      var errorMessages = [];

      // check if userID is empty
      if (userID.trim() === "") {
          errorMessages.push("Username should not be empty.");
      }

      // check if userID starts with the correct prefix for each user type
      if (userType === "agriculturalOfficer" && !userID.startsWith("AO-")) {
          errorMessages.push("User ID should start with AO-");
      } else if (userType === "farmerOne" && !userID.startsWith("FO-")) {
          errorMessages.push("User ID should start with FO-");
      } else if (userType === "urbanFarmer" && !userID.startsWith("UF-")) {
          errorMessages.push("User ID should start with UF-");
      } else if (userType === "customer" && !userID.includes("@")) {
          errorMessages.push("User ID should be a valid email address.");
      }

      // check if name is between 5 and 50 characters
      if (userID.length < 5 || userID.length > 50) {
          errorMessages.push("User ID should be between 5 and 50 characters long.");
      }

      // check if password is empty
      if (password.trim() === "") {
          errorMessages.push("Password should not be empty.");
      }

      // check if password is at least 8 characters long
      if (password.length < 8) {
          errorMessages.push("Password should be at least 8 characters long.");
      }

      // remove previous error messages
      $(".alert-danger").remove();

      //display error messages one at a time
      if (errorMessages.length > 0) {
          event.preventDefault();
          var errorMessageHTML = "<div class='alert alert-danger'>";
          errorMessageHTML += "<ul>";
          for (var i = 0; i < errorMessages.length; i++) {
              errorMessageHTML += "<li>" + errorMessages[i] + "</li>";
          }
    
      
          errorMessageHTML += "</ul>";
          errorMessageHTML += "</div>";
//$("#userID").after(errorMessageHTML);
        $("#userID").after(errorMessages[0]);

      }
  });
});

// Username should not be empty: Add validation to ensure that the username field is not empty before submitting the form.

// All names should be strings between 5 to 50 characters: Add validation to ensure that all name fields (e.g. user ID) are strings between 5 to 50 characters in length.

// When user selects Agricultural Officer, auto-start writing the userID input field to start with AO- so that the user can continue from there: Add a script to detect when the user selects Agricultural Officer and automatically insert "AO-" at the beginning of the user ID field.

// For Farmer One, use FO- and for Urban Farmer, use UF-: Add a script to detect when the user selects Farmer One or Urban Farmer and automatically insert "FO-" or "UF-" at the beginning of the user ID field.

// For the Customer option, use an email field instead of a user ID field: Add a script to detect when the user selects Customer and replace the user ID field with an email field.

// Display error messages below each field in red when there is an error: Add validation for each field and display error messages in red below the field where the error occurred.

// Ensure that only one error message is displayed at a time: Modify the validation to display only one error message at a time, rather than displaying all error messages simultaneously.

// Validate the password: Add validation to ensure that the password field is not empty and meets any additional requirements (such as a minimum length).

// I hope this helps! Let me know if you have any further questions or concerns.



