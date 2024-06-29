function handleRegister() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:5000/api/auth/register', { username: username, email: email, password: password })
        .then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert('Register successful');
                // window.location.href = '/login';
            }
        })
        .catch((error) => {
            console.error(error);
        }); 
}