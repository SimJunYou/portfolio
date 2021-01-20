import React from 'react';
import Helmet from 'react-helmet';
import Zoom from 'react-reveal/Zoom';
import NavBar from './NavBar';

const MainTextCol = () => (
  <Zoom>
    <div className="col">
      <div className="p-3 border border-3 rounded bg-light">
        <h1> Main stuff </h1>
        <span> This stuff stretches and the side tries to stay the same. </span>
      </div>
    </div>
  </Zoom>
);

const SideBarCol = () => (
  <div className="col-3">
    <div className="p-3 border border-3 rounded bg-light">
      <span> Here is the sidebar which should not stretch. </span>
    </div>
  </div>
);

export default () => (
  <>
    <Helmet>
      <style>{'body{background-color: grey}'}</style>
    </Helmet>
    <div className="container gy-2">
      <div className="row g-2">
        {/* Following line adds some space between the top and the NavBar */}
        <div className="w-100" />
        <NavBar />
        <MainTextCol />
        <SideBarCol />
      </div>
    </div>
  </>
);
