import React from 'react';

const NavBar = () => (
  <div className="row d-flex" id="Navbar">
    <a className="pl-5 pt-3 mr-auto">Home</a>
    <a className="pr-4 pt-3">Projects</a>
    <a className="pr-5 pt-3">Contact</a>
  </div>
);

export default () => <NavBar />;
