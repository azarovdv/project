import React from 'react';

export default function OneCategory({ name }) {
  const cardStyleCat = {
    width: '200px',
    minHeight: '150px',
    border: '2px solid black',
    borderRadius: '13px',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(78, 157, 57, 0.8))',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
  };
  return (
    <a href={`/animals/${name.id}`} style={linkStyle}>
      <div style={cardStyleCat}>
        {name.name}
      </div>
    </a>
  );
}
