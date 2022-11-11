import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist....</p>
      <div
        style={{
          width: '100%',
          height: 0,
          paddingBottom: '70%',
          position: 'relative',
        }}
      >
        <iframe
          title="seinfeld 404"
          src="https://giphy.com/embed/OK27wINdQS5YQ"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder={0}
          className="giphy-embed"
          allowFullScreen={true}
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ">
          via GIPHY
        </a>
      </p>
    </div>
  )
}

export default NotFoundPage
