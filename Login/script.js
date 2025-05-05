document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Remember Me:', rememberMe);

  // ✅ Show alert
  alert("Login successful! Redirecting to menu...");

  // ✅ Then redirect
  window.location.href = "../menu.html";  // Adjust this path if needed
});

