import React from 'react';
import './Gif.css';

const Gif = props => {
  return (
    <a className="Gif-link" href={props.url} target="_blank" rel="noreferrer">
      <img className="Gif" alt={props.alt} src={props.src} />
    </a>
  );
}

export default Gif;