import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Title from './Title';

export default () => (
  <div className="row row-cols-1 d-flex w-100" id="Header">
    <div className="col d-flex justify-content-center align-items-center">
      <div className="w-50">
        <Zoom>
          <Title />
        </Zoom>
      </div>
    </div>
  </div>
);
