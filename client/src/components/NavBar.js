/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React from 'react';
import { useSpring, a, config } from 'react-spring';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const NavBarButton = ({ name, href, scr }) => {
  const [hover, setHover] = React.useState(false);
  const currentOpacity = scr ? 0.7 : 0.5;
  const fadeIn = useSpring({
    opacity: hover ? 1 : currentOpacity,
    from: { opacity: currentOpacity },
  });
  return (
    <a.div style={fadeIn}>
      <a
        onMouseOut={() => setHover(false)}
        onMouseOver={() => setHover(true)}
        href={href}
      >
        {name}
      </a>
    </a.div>
  );
};

const NavBar = () => {
  const [scroll, setScroll] = React.useState(false);

  const updateScroll = () => {
    // An extension of the title animation in Title.js
    const pageTitle = document.getElementById('PageTitle');
    console.log(scroll);
    if (window.scrollY > pageTitle.offsetTop) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });

  // Changes the color to a darker shade upon scroll, in sync with the title size change
  const colorChange = useSpring({
    backgroundColor: scroll ? '#dbd5c0' : '#e6e0ca',
    from: { backgroundColor: '#e6e0ca' },
    config: config.gentle,
  });

  const opacityChange = useSpring({
    opacity: scroll ? 1 : 0,
    from: { opacity: 0 },
    config: config.gentle,
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  return (
    <a.div
      style={colorChange}
      className={
        isDesktopOrLaptop
          ? 'row d-flex justify-content-between align-items-center sticky'
          : 'row d-flex justify-content-around py-2 sticky'
      }
      id="Navbar"
    >
      <div className={isDesktopOrLaptop ? 'pl-5' : null}>
        <NavBarButton name="Home" href="#" scr={scroll} />
      </div>
      <a.span style={opacityChange} id="PageTitle">
        My Portfolio
      </a.span>
      <div className="d-flex">
        <div className={isDesktopOrLaptop ? 'pr-4' : null}>
          <NavBarButton name="Projects" href="#" scr={scroll} />
        </div>
        <div className={isDesktopOrLaptop ? 'pr-5' : null}>
          <NavBarButton name="Contact" href="#" scr={scroll} />
        </div>
      </div>
    </a.div>
  );
};

NavBarButton.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  scr: PropTypes.bool.isRequired,
};

NavBarButton.defaultProps = {
  name: 'Link',
  href: '#',
};

export default () => <NavBar />;
