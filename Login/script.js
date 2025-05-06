document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop page refresh
      
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;

      // Simple check before redirecting
      if (email.trim() !== "" && password.trim() !== "") {
        // ✅ Correct path based on your folder structure
        window.location.href = "../menu.html";
      } else {
        alert("Please enter both email and password.");
      }
    });
  } else {
    console.log("Form not found!");
  }
});
