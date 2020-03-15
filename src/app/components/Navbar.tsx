import { Link } from 'gatsby';
import React, { Component } from 'react';

import contactData from '../data/contact';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/portfolio'}>Portfolio</Link>
          <Link to={'/journey'}>Journey</Link>
          <a href={contactData.github} target='_new'>
            Github
          </a>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/blog'}>Blog</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
