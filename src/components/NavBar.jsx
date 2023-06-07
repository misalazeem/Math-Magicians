import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/" className="links-desktop">Home</Link>
          </li>
          <li>
            <Link to="/Calculator" className="links-desktop">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote" className="links-desktop">Quote</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className="mobile-hamburger" />
      {isOpen && (
        <div className="mobile-menu">
          <FontAwesomeIcon onClick={toggleMenu} className="close-button" icon={faTimes} />
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} className="links-mobile">Home</Link>
            </li>
            <li>
              <Link to="/Calculator" onClick={toggleMenu} className="links-mobile">Calculator</Link>
            </li>
            <li>
              <Link to="/Quote" onClick={toggleMenu} className="links-mobile">Quote</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
