import React from 'react';

export default function AnimalCard({ oneAnimal }) {
  const cardStyle = {
    width: '280px',
    minHeight: '360px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '13px',
    // margin: '10px',
    padding: '0 10px',
    background: 'linear-gradient(to bottom, #ffffff, #4e9d39)',
  };
  const imgStyle = {
    width: '150px',
    minHeight: '150px',
    borderRadius: '13px',
  };
  return (
    <div>
      <div style={cardStyle}>
        <div></div>
        {' '}
        <img style={imgStyle} src={oneAnimal.img} alt="oneAnimal.img" />
        <h3>{oneAnimal.name}</h3>
        <p>{oneAnimal.body}</p>
      </div>
    </div>
  );
}
