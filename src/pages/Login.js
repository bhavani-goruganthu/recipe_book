import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const Login = () => {
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
              />
              <br />
              <br />
              <a href="/">Forgot Password?</a>
              <br />
              <Link to="/OwnerSignup">Don't have an account?</Link>
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
