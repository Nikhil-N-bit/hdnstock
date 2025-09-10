import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container">
          {/* Left side: Logo */}
          <a className="navbar-brand" href="#">
            {/* The new hdkstock logo */}
            <img src="media/images/hdnlogo.png" alt="hdkstock Logo" style={{ height: '130px', width:"130px" }} />
          </a>

          {/* Right side: Toggler and Navigation Links */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className="nav-link" to = "/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to= "/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;