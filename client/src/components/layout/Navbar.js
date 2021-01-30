import React, { Fragment, useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const {isAuthenticated, logout, user, loadUser} = authContext;
  const {clearContacts} = contactContext;
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

  //toggle menu button
  const handleClick = () => setClick(!click);
  //close the menu when you click
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);


  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-links">Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span >Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-links">
        <Link to="/register">Register</Link>
      </li>
      <li className="nav-links">
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Ger’s Garage
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/booking"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Booking
              </Link>
            </li>

            
            
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
};

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string
// };

// Navbar.defaultProps = {
//   title: 'Contact Keeper',
//   icon: 'fas fa-id-card-alt'
// };

export default Navbar;


  // <div className="navbar bg-primary">
  //     <h1>
  //       <Link to="/">
  //         <i className={icon} /> {title}
  //       </Link>
  //     </h1>
  //     <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
  //   </div>