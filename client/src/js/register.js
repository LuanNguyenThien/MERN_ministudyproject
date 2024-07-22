// File: register.js
// Import axios for making HTTP requests
import axios from 'axios';

// Function to handle user registration
const handleRegister = async (e, { username, email, password, setErrorMessage, onRegisterSuccess }) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
    if (response.status === 200) {
      onRegisterSuccess(response); // Gọi callback với phản hồi
    }
  } catch (error) {
    const message = error.response && error.response.data ? error.response.data.error : 'An unknown error occurred';
    console.error(message);
    setErrorMessage(message);
  }
};

// Export the handleRegister function for use in other parts of the application
export default handleRegister;