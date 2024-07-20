// File: register.js

// Import axios for making HTTP requests
import axios from 'axios';

// Function to handle user registration
const handleRegister = async (e, { username, email, password, setErrorMessage }) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    // Attempt to register the user using the provided credentials
    const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });

    // If registration is successful
    if (response.status === 200) {
      alert('Successfully registered'); // Show success message
      window.location.href = '/login.html'; // Redirect to the login page
    }
  } catch (error) {
    // Handle errors
    const message = error.response && error.response.data ? error.response.data.error : 'An unknown error occurred';
    console.error(message); // Log the error for developers
    setErrorMessage(message); // Update the UI with the error message
  }
};

// Export the handleRegister function for use in other parts of the application
export default handleRegister;