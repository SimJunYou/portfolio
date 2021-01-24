import React from 'react';
import { useSpring, a, config } from 'react-spring';
import PropTypes from 'prop-types';
import Data from './Data';

const DelayedFadeIn = ({ delayNum, children }) => {
  const delayFadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
    delay: delayNum,
  });
  return <a.div style={delayFadeIn}>{children}</a.div>;
};

DelayedFadeIn.propTypes = {
  delayNum: PropTypes.number,
  children: PropTypes.element.isRequired,
};

DelayedFadeIn.defaultProps = {
  delayNum: 1000,
};

export default () => (
  <div className="row">
    <div className="col-12 d-flex justify-content-center p-3">
      <DelayedFadeIn delayNum={0}>
        <span id="pageTitle">My Portfolio</span>
      </DelayedFadeIn>
    </div>
    <div className="col-7">
      <DelayedFadeIn delayNum={500}>
        <span>{Data.titleLeft}</span>
      </DelayedFadeIn>
    </div>
    <div className="col-5">
      <DelayedFadeIn delayNum={1000}>
        <img src="/me.jpg" alt="Me" className="border rounded" id="me" />
      </DelayedFadeIn>
    </div>
  </div>
);
