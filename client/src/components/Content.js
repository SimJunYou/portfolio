import React from 'react';
import Slide from 'react-reveal/Slide';
import PropTypes from 'prop-types';

const MainTextCol = ({ title, body }) => (
  <div className="row row-cols-1">
    <div className="col-12 darkCard">
      <div className="row p-5">
        <Slide left>
          <div className="col">
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </Slide>
        <Slide right>
          <div className="col">Testing</div>
        </Slide>
      </div>
    </div>
  </div>
);

MainTextCol.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

MainTextCol.defaultProps = {
  title: 'Filler title',
  body: 'Filler body',
};

export default MainTextCol;
