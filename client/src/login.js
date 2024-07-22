// Trong file Login.js
import React, {useState} from 'react';
import './css/App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Hàm xử lý khi form được submit
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Xử lý đăng nhập ở đây
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        if (response.status === 200) {
           // Gọi callback với phản hồi
        }
      } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : 'An unknown error occurred';
        console.error(message);
      }
    };
  
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link to="/" className="h1"><b>Admin</b>LTE</Link>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
  
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" className="form-control" placeholder="Email" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input 
                    value={password} onChange={(e) => setPassword(e.target.value)}  
                    type="password" className="form-control" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                  </div>
                </div>
              </form>
  
              <div className="social-auth-links text-center mt-2 mb-3">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
              </div>
  
              <p className="mb-1">
                <Link to="/forgot-password">I forgot my password</Link>
              </p>
              <p className="mb-0">
                <Link to="/register" className="text-center">Register a new membership</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;