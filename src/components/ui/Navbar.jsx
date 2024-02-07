import React from 'react';

export default function Navbar() {
  return (
    <>
      <style>
        {`
      .navbar-nav .nav-link {
        font-size: 35px;
      }
      .nav-link {color:white}
    `}
      </style>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" style={{ marginLeft: '100px' }} aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/categories">Animals</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" style={{ marginRight: '100px' }} href="/price">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
