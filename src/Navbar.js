import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <div>
       <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="#">
        <img src="http://netnus.net/veggoshop/wp-content/uploads/2022/01/logo.jpg" alt="Sorry" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item dropdown mx-4">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>
  
  )}
