import React, { useState } from 'react';
import logo from './logo.svg';
import './css/App.css';
import handleRegister from './js/register';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    handleRegister(e, { 
        username, 
        email, 
        password, 
        setErrorMessage,
        onRegisterSuccess: (response) => {
          alert('Successfully registered');  
          navigate('/login');
        }
    });
  };

  return (
    <div className="register-box">
      <div className="register-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>

      <div className="card">
        <div className="card-body register-card-body">
          <div className="logo-text-container">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="login-box-msg">Register a new membership</p>
          </div>

          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                >Register</button>
              </div>
            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2"></i>
              Sign up using Facebook
            </a>
            <a href="#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2"></i>
              Sign up using Google+
            </a>
          </div>

          <Link to="/login" className='text-center'>I already have a membership</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;