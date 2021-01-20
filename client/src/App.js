/* eslint-disable indent */

import React from 'react';
import PropTypes from 'prop-types';

const NavBar = () => (
  <nav className="navbar p-3 navbar-expand-lg border navbar-light bg-light">
    <a className="navbar-brand" href="#">Title</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Project 1</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default () => (
  <div className="container gy-2">
    <div className="row g-2">
      <div className="col">
        <NavBar />
      </div>
      {/* Force the following columns to break to new line */}
      <div className="w-100" />
      <div className="col">
        <div className="p-3 border bg-light">
          <h1> Main stuff </h1>
          <span> This stuff stretches and the side tries to stay the same. </span>
        </div>
      </div>
      <div className="col-4">
        <div className="p-3 border bg-light">
          <span> Here is the sidebar which should not stretch. </span>
        </div>
      </div>
    </div>
  </div>
);
