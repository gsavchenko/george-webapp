import React from 'react';

interface INotFoundPageProps {
  location: string;
}

const NotFoundPage:React.FC<INotFoundPageProps> = () => (
  <div>
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist....</p>
    <div style={{
      width: '100%',
      height: 0,
      paddingBottom: '70%',
      position: 'relative'
    }}
    >
      <iframe
        title="seinfeld"
        src="https://giphy.com/embed/OK27wINdQS5YQ"
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
        frameBorder={0}
        className="giphy-embed"
        allowFullScreen
      />
    </div>
    <p><a href="https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ">via GIPHY</a></p>
  </div>
);

export default NotFoundPage;
