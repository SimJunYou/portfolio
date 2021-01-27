import React from 'react';
import Slide from 'react-reveal/Slide';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Data from './Data';

const Content = ({ title, body }) => (
  <div id="ContentLeft">
    <h1>{title}</h1>
    <p>{Data.formatText(body)}</p>
  </div>
);

const DesktopCols = ({ title, body }) => (
  <div className="row p-5">
    <div className="col-7">
      <Slide left>
        <Content title={title} body={body} />
      </Slide>
    </div>
    <div className="col-5">
      <Slide right>
        <div className="col-6">Testing</div>
      </Slide>
    </div>
  </div>
);

const MobileCols = ({ title, body }) => (
  <div className="row p-1">
    <Content title={title} body={body} />
  </div>
);

const MainTextCol = ({ title, body }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className="row row-cols-1">
      <div className="col-12 darkCard">
        {isDesktopOrLaptop && <DesktopCols title={title} body={body} />}
        {isTabletOrMobile && <MobileCols title={title} body={body} />}
      </div>
    </div>
  );
};

MainTextCol.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

DesktopCols.propTypes = MainTextCol.propTypes;

MobileCols.propTypes = MainTextCol.propTypes;

Content.propTypes = MainTextCol.propTypes;

export default MainTextCol;
