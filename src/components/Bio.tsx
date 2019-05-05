import React from 'react';

// Import typefaces
import 'typeface-merriweather';
import 'typeface-montserrat';

import bioData from '../data/bio';
import { rhythm } from '../utils/typography';
import profilePic from './../assets/images/avatar.png';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{ display: 'flex', marginBottom: rhythm(2.5) }}
      >
        <img
          src={profilePic}
          alt={`Sai Krishna`}
          style={{ marginRight: rhythm(1 / 2), marginBottom: 0, width: rhythm(2), height: rhythm(2) }}
        />
        <p>{bioData}</p>
      </div>
    );
  }
}

export default Bio;
