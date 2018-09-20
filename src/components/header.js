import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import '../styles/header.css';

const Header = () => (
  <div className='header'>
    <h2><Link activeClassName='active' to='/'>Home</Link></h2>
    <h2><Link activeClassName='active' to='/about'>About</Link></h2>
    <h2><Link activeClassName='active' to='/projects'>Projects</Link></h2>
    <h2><Link activeClassName='active' to='/blog'>Blog</Link></h2>
    <h2><Link activeClassName='active' to='/contact'>Contact</Link></h2>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header;
