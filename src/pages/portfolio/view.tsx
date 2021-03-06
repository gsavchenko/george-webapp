import { Link } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

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
        <Helmet>
          <title>{`${title} | Sai Krishna`}</title>
        </Helmet>
        <Link to='/portfolio'>&larr; back</Link>
        <h2>{title}</h2>
        <img src={image} />
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
