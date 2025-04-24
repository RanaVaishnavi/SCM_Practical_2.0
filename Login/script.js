function validateLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!email || !password) {
      alert("Please fill in both fields.");
      return false;
    }
  
    alert(`Welcome, ${email}!`);
    return true;
  }
  