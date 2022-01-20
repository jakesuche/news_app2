import React from 'react';
import './header.css'



const Header = () => {
    return (
        <header className="header">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navbar-top">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="navbar-top-left-menu">
                    <li className="nav-item">
                      <a href="pages/index-inner.html" className="nav-link">Advertise</a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/aboutus.html" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Events</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Write for Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">In the Press</a>
                    </li>
                  </ul>
                  <ul className="navbar-top-right-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="mdi mdi-magnify"></i></a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Sign in</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  
                  <div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                   
                  </div>
                 
                </div>
              </div>
            </nav>
          </div>
        </header>
    )
}

export default Header