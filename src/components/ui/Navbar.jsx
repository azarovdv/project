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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/animals">Animals</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/price">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
