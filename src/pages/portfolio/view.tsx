import { Link } from 'gatsby';
import React, { Component } from 'react';

interface IViewState {
  title: string;
  description: string;
  image: string;
  website: string;
}

interface IViewProps {
  location: {
    state: IViewState;
  };
}

export class View extends Component<IViewProps, IViewState> {
  render() {
    const passedData = this.props.location.state || {
      title: 'default title',
      description: 'default description',
      image: 'https://via.placeholder.com/350',
      website: 'https://via.placeholder.com',
    };
    const { title, description, image, website } = passedData;
    return (
      <div>
        <Link to='/portfolio'>&larr; back</Link>
        <h2>{title}</h2>
        <img src={image} alt='profile'/>
        <div>
          {description}
          <br /> <br />
          {website && (<div> Website:{' '} <a href={website} target='new'>{website}</a> </div>)}
        </div>
      </div>
    );
  }
}

export default View;
