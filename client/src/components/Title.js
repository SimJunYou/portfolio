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

const MorphingTitle = () => {
  const [scroll, setScroll] = React.useState(false);

  window.onscroll = () => {
    const pageTitle = document.getElementById('PageTitle');
    if (window.scrollY > pageTitle.offsetTop) {
      setScroll(true);
      pageTitle.classList.add('scrolled');
    } else {
      setScroll(false);
      pageTitle.classList.remove('scrolled');
    }
  };

  const sizeChange = useSpring({
    fontSize: scroll ? '10px' : '90px',
    opacity: scroll ? 0 : 1,
    from: { fontSize: '90px', opacity: 1 },
    config: config.gentle,
  });

  return (
    <a.div
      style={sizeChange}
      className="d-flex justify-content-center w-100"
      id="PageTitle"
    >
      <span style={{ zIndex: 2 }}>{Data.title}</span>
    </a.div>
  );
};

export default () => (
  <div className="row" id="HeaderContainer">
    <div className="col-12 d-flex justify-content-center p-3" style={{ zIndex: 2 }}>
      <DelayedFadeIn delayNum={0}>
        <MorphingTitle />
      </DelayedFadeIn>
    </div>
    <div className="col col-sm-7">
      <DelayedFadeIn delayNum={500}>
        <span>{Data.formatText(Data.titleLeft)}</span>
      </DelayedFadeIn>
    </div>
    <div className="col col-sm-5">
      <DelayedFadeIn delayNum={1000}>
        <img
          src="/me.jpg"
          alt="Me"
          className="border rounded img-fluid"
          id="me"
        />
      </DelayedFadeIn>
    </div>
  </div>
);
