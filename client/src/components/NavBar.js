/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React from 'react';
import { useSpring, a } from 'react-spring';
import PropTypes from 'prop-types';

const NavBarButton = ({ name, href }) => {
  const [hover, setHover] = React.useState(false);
  const fadeIn = useSpring({
    opacity: hover ? 1 : 0.5,
    from: { opacity: 0.5 },
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

const NavBar = () => (
  <div className="row d-flex" id="Navbar">
    <div className="pl-5 pt-3 mr-auto">
      <NavBarButton name="Home" href="#" />
    </div>
    <div className="pr-4 pt-3">
      <NavBarButton name="Projects" href="#" />
    </div>
    <div className="pr-5 pt-3">
      <NavBarButton name="Contact" href="#" />
    </div>
  </div>
);

NavBarButton.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

NavBarButton.defaultProps = {
  name: 'Link',
  href: '#',
};

export default () => <NavBar />;
