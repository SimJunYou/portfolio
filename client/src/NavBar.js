import React from 'react';

const NavBar = () => (
  <div className="col-12">
    <nav className="navbar p-3 navbar-expand-lg border border-3 rounded navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Title
      </a>
      {/* The NavBar collapses at the large breakpoint and creates this button to expand it */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Here are the links (other than the title) that collapses */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <NavBarDropdown />
        </ul>
      </div>
    </nav>
  </div>
);

const NavBarDropdown = () => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">
        Project 1
      </a>
      <a className="dropdown-item" href="#">
        Project 2
      </a>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="#">
        Project 3
      </a>
    </div>
  </li>
);

export default () => <NavBar />;
