async function handleRegister() {
    try {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        const response = await axios.post('http://localhost:5000/api/auth/register', { username: username, email: email, password: password })
        if (response.status === 200) {
            alert('Successfully registered');
            window.location.href = '/client/login.html';
        } else {
            // Lấy thông điệp lỗi từ JSON
            const error = response.data.error || 'An unknown error occurred';
            alert(error);
        }
    } catch (error) {
        // Hiển thị thông báo lỗi từ server hoặc một lỗi mặc định
        const message = error.response && error.response.data ? error.response.data.error : 'An unknown error occurred';
        console.error(message); // Vẫn giữ log cho developer
        if (errorMessage) {
            errorMessage.textContent = message // Hiển thị lỗi trên UI
            errorMessage.style.display = 'block';
        } else {
            alert(message); // Nếu không có phần tử errorMessage, sử dụng alert
        }
        console.error(error);
    }
}