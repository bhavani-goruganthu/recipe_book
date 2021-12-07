import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onSubmitUserLogin = (event) => {
    event.preventDefault();
    axios
      .get('http://localhost:4000/api/user/login', {
        params: {
          userEmail: userEmail,
        },
      })
      .then((response) => {
        if (response.data[0].login_password == userPassword) {
          navigate('/home');
        } else alert('Login Failed..!! Try Again');
      });
  };
  return (
    <div className="container-fluid row">
      <p className="h3 primary-color mx-auto text-center mt-3 mb-4">
        Welcome to your Personal Recipe Book
      </p>
      <div className="col-lg-7 login-bg"></div>
      <div className="col-lg-5 my-auto">
        <div className=" mx-auto w-75 align-items-center justify-content-center">
          <form
            className="mx-auto login-container"
            method="post"
            encType="application/x-www-form-urlencoded"
            onSubmit={onSubmitUserLogin}
          >
            <div className="m-3">
              <input id="redirect-input" type="hidden" name="redirect" />
              <h2 className="font-weight-bold text-center">User Login</h2>
              <br />
              <label htmlFor="Email" className="">
                Email
              </label>
              <br />
              <input
                className="login_input-field"
                type="email"
                id="displayNameInput"
                name="displayName"
                placeholder="e.g. john.doe@gmail.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="Password" className="login-label">
                Password
              </label>
              <br />
              <input
                className="login_input-field"
                type="password"
                id="passwordInput"
                name="password"
                placeholder="must have at least 6 characters"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <br />
              <br />
              <a href="/">Forgot Password?</a>
              <br />
              <Link to="/signup">Don't have an account?</Link>
              <br />
              <br />
              <button
                type="submit"
                className="d-flex align-items-center justify-content-center login_button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
