import React from 'react';

export default (
  {
    serviceName,
    url,
  }:
  {
    serviceName: string;
    url: string;
  }
) => (
  <div className="column">
    <div className="contactCard">
      <h1 className="title is-size-6">{serviceName}</h1>
      <a href={url} className="button">View Profile</a>
    </div>
  </div>
)
