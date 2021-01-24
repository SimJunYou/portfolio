import React from 'react';

import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import MainTextCol from './Content';
import Data from './Data';

export default () => (
  <div className="container-fluid" id="Layout">
    <NavBar />
    <Header />
    <MainTextCol
      title={Data.contentTitle}
      body={Data.contentBody}
    />
    <Footer />
  </div>
);
