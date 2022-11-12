import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
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
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.title} {/* // <<< see props  */}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="aboutpage"
                  to="/aboutpage"
                >
                  {props.abouttitle} {/* // <<< see props  */}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/myprojectpage">
                  MY PROJECT
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// PropTypes

Navbar.propTypes = {
  title: PropTypes.string,
  abouttitle: PropTypes.string,
  num: PropTypes.string,
};

Navbar.defaultProps = {
  title: "HOME",
  abouttitle: "ABOUT",
};

// >>> isRequired  <<<

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     abouttitle: PropTypes.string.isRequired,
//     num: PropTypes.string,
//   };
