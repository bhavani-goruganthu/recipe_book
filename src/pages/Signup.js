import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userDailyCalorieLimit, setUserDailyCalorieLimit] = useState(0);
  const [showPasswordsMismatchAlert, setShowPasswordsMismatchAlert] =
    useState(false);

  const comparePasswords = () => {
    if (userPassword !== userConfirmPassword) {
      setShowPasswordsMismatchAlert(true);
    } else {
      setShowPasswordsMismatchAlert(false);
    }
  };

  const onSubmitUserSignup = (event) => {
    event.preventDefault();
    comparePasswords();
    if (!showPasswordsMismatchAlert) {
      axios
        .post('http://localhost:4000/api/user/signup', {
          userName: userName,
          userEmail: userEmail,
          userDailyCalorieLimit: userDailyCalorieLimit,
          userPassword: userPassword,
        })
        .then((response) => {
          alert('Thank you for Registering!!');
          navigate('/login');
        });
    }
  };

  return (
    <div className="container-fluid row">
      <p className="h3 primary-color mx-auto text-center mt-3 mb-4">
        Welcome to your Personal Recipe Book
      </p>
      <div className="col-lg-7 login-bg" />
      <div className="col-lg-5 my-auto">
        <div className=" mx-auto w-75 align-items-center justify-content-center">
          <form
            className="mx-auto login-container"
            method="post"
            encType="application/x-www-form-urlencoded"
            onSubmit={onSubmitUserSignup}
          >
            <div className="mx-3 my-2">
              <input id="redirect-input" type="hidden" name="redirect" />
              <h2 className="font-weight-bold text-center">User Signup</h2>
              <h6 className="text-info text-center">
                All fields are Mandatory
              </h6>
              <label htmlFor="ownerName" className="login-label  first-label">
                Name
              </label>
              <input
                id="name"
                className="login_input-field"
                type="text"
                placeholder="e.g. John Doe"
                required
                name="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="Email" className="login-label">
                Email
              </label>
              <input
                className="login_input-field"
                id="Email"
                type="email"
                placeholder="e.g. john.doe@gmail.com"
                required
                name="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label htmlFor="dailyCalorieLimit" className="login-label">
                Daily Calorie Limit
              </label>
              <input
                id="dailyCalorieLimit"
                className="login_input-field"
                type="number"
                placeholder="e.g. 2000"
                min="500"
                required
                name="Daily Calorie Limit"
                value={userDailyCalorieLimit}
                onChange={(e) => setUserDailyCalorieLimit(e.target.value)}
              />
              <label htmlFor="Password" className="login-label">
                Password
              </label>
              <input
                className="login_input-field"
                id="password"
                type="password"
                placeholder="must have at least 6 characters"
                required
                name="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <label htmlFor="PassConfirmation" className="login-label">
                Confirm Password
              </label>
              <input
                className="login_input-field"
                id="PassConfirmation"
                type="password"
                placeholder="must have at least 6 characters"
                required
                name="cpassword"
                value={userConfirmPassword}
                onChange={(e) => setUserConfirmPassword(e.target.value)}
                onBlur={comparePasswords}
              />
              {showPasswordsMismatchAlert ? (
                <div className="invalid">
                  <b>Password & Confirm Password do not match</b> <br />
                  <i>Try again</i>
                </div>
              ) : (
                <> </>
              )}
              <div className="form-check mt-2 ml-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  required
                />
                <label
                  htmlFor="defaultCheck1 Warning"
                  className="form-check-label"
                >
                  I Agree to the <u>Terms & Conditions</u>
                </label>
              </div>
              <Link to="/login">Already Registered?</Link>
              <br />
              <button
                type="submit"
                className="login_button d-flex justify-content-center mt-3"
                value="Register"
                onClick={comparePasswords}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
