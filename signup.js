function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
  
    if (name == "" || email == "" || password == "" || confirm_password == "") {
      alert("All fields must be filled out");
      return false;
    }  
    if (password != confirm_password) {
      alert("Passwords do not match");
      return false;
    }
    alert("Sign-up successful!");
    return true;
  }