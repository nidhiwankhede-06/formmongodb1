document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = e.target.username.value.trim();
  const password = e.target.password.value;

  if (!username || !password) {
    alert('All fields are required!');
    return;
  }

  const res = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (res.ok) {
    alert('Login Successful!');
    window.location.href = 'register.html';
  } else {
    alert(data.message || 'Login failed');
  }
});
