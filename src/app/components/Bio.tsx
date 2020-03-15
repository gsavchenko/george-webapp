import React from 'react';

// Import typefaces
import 'typeface-merriweather';
import 'typeface-montserrat';

import bioData from '../data/bio';
import profilePic from '../../assets/images/avatar.png';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt={`Sai Krishna`}/>
        <p>{bioData}</p>
      </div>
    );
  }
}

export default Bio;
