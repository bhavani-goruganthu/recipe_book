import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const Signup = () => {
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
                // value={ownerName}
                // onChange={(e) => dispatch(setOwnerName(e.target.value))}
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
                // value={Email}
                // onChange={(e) => dispatch(setEmail(e.target.value))}
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
                // value={dailyCalorieLimit}
                // onChange={(e) =>
                //   dispatch(setdailyCalorieLimit(e.target.value))
                // }
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
                // value={ownerPassword}
                // onChange={(e) => dispatch(setOwnerPassword(e.target.value))}
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
                // value={ownerConfirmPassword}
                // onChange={(e) => dispatch(setOwnerConfirmPassword(e.target.value))}
              />
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
                // onClick={comparePasswords}
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
