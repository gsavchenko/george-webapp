import React from 'react';
import bioData from '../../data/bio';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p>{bioData}</p>
      </div>
    );
  }
}

export default Bio;
