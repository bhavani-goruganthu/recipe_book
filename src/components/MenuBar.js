import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/menubar.css';
import Logo from '../assets/img/Logo.jpg';

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-bg">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand text-white">
          <img
            src={Logo}
            alt="Avatar Logo"
            className="rounded-pill recipe-logo border border-4 border-success"
          />{' '}
          Recipe Book
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ingredients" className="nav-link">
                Ingredients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
