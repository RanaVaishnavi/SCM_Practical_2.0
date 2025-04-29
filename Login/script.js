document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Remember Me:', rememberMe);
  
  alert('Login clicked! (Functionality can be added)');
});
