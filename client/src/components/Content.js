import React from 'react';
import Slide from 'react-reveal/Slide';
import Data from './Data';

const MainTextCol = () => (
  <div className="row row-cols-1">
    <div className="col-12 darkCard">
      <div className="row p-5">
        <Slide left>
          <div className="col">
            <h1> Main stuff </h1>
            <span>
              {Data.filler}
            </span>
          </div>
        </Slide>
        <Slide right>
          <div className="col">Testing</div>
        </Slide>
      </div>
    </div>
  </div>
);

export default () => <MainTextCol />;
