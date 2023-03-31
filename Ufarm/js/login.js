// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Send login request to server
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('userType', data.userType);
    window.location.href = '/dashboard.html';
  } else {
    const error = await response.text();
    const errorMessage = document.getElementById('login-error');
    errorMessage.innerText = error;
  }
});
