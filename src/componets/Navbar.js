import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// passsing title as 'props' this is like parameter

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* sample add HOME */}
              <Link className="nav-link active" aria-current="page" to="/home"> 
                {props.homeT}
              </Link>
            </li>
            {/* .........Link to......... */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutT}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div className={`form-check form-switch text-${props.textCol}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.textCol} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  homeT: PropTypes.string,
  aboutT: PropTypes.string,
};

Navbar.defaultProps = {
  title: "titlemee",
  homeT: "homeme",
  aboutT: "aboutmee",
};
