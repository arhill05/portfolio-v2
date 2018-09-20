import React from 'react';
import { Link } from 'gatsby'
import '../styles/hero.css';

const Hero = () => (
  <div className='hero'>
    <div className="hero__brand-text-wrapper">
      <h1><span className="hero__brand-text">ANDREW HILL</span></h1>
    </div>
    <div className="hero__sub-text-wrapper">
      <h3>I like full stack development and mechanical keyboards.
      Occasionally I'll write about those and more <Link to='/blog'>here</Link>.</h3>
    </div>
  </div>
)

Hero.propTypes = {}

export default Hero;
