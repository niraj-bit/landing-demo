import React from "react";
import "./Header.css";
import "./topbar"

export default function Header() {
  return (
    <>
      {/* nav */}
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            cybint
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Solution
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our offering
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav> */}
      
      {/* slider */}
      <div>
      <topbar/>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators"></div>
          <div className="carousel-inner" />
          <div className="carousel-item active" />
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/1800x600/"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Automation and Data security solution through innovation</h2>
          </div>
          {/* copy */}
        </div>
      </div>
    </>
  );
}
