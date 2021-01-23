import React from 'react';

import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import MainTextCol from './Content';

export default () => (
  <div className="container-fluid" id="Layout">
    <NavBar />
    <Header />
    <MainTextCol />
    <Footer />
  </div>
);
