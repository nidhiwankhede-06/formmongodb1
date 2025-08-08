document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const username = e.target.username.value.trim();
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  if (!username || !password || !confirmPassword) {
    alert('All fields are required!');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const res = await fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (res.ok) {
    alert('Registration successful! Please login.');
    window.location.href = 'form.html';
  } else {
    alert(data.message || 'Registration failed');
  }
});
