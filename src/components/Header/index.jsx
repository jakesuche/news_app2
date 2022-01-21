import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-top">
            <div className="d-flex justify-content-between align-items-center">
              <ul className="navbar-top-left-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link
                  to="/"
                  style={{ border: "none", background: "none" }}
                  className="navbar-toggler"
                >
                  <span>Home</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
