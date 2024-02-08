import React from 'react';

export default function AnimalCard({ oneAnimal }) {
  const cardStyle = {
    width: '300px',
    minHeight: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '13px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(78, 157, 57, 0.8))',
    position: 'relative',
  };
  const imgStyle = {
    paddingTop: '10px',
    width: '150px',
    minHeight: '150px',
    borderRadius: '13px',
    objectFit: 'cover',
  };
  const buttonUpdate = {
    width: '100px',
    minHeight: '15px',
    border: '1px solid black',
    borderRadius: '7px',
    color: 'white',
    fontSize: '10px',
    background: 'linear-gradient(to bottom, #1316a0, #1c34ba)',
  };
  const buttonDelete = {
    width: '100px',
    minHeight: '12px',
    border: '1px solid black',
    borderRadius: '7px',
    color: 'white',
    fontSize: '11px',
    background: 'linear-gradient(to bottom, #441b1b, #922626)',
  };
  const buttonContainer = {
    width: '100%',
    marginTop: '5px',
    minHeight: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    padding: '0 5px',
    bottom: '0',
  };
  const titleStyle = {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5px',
    margin: '0',
  };
  const bodyStyle = {
    color: 'white',
    fontSize: '14px',
    padding: '8px 5px 23px',
    margin: '0',
    background: 'rgba(0, 0, 0, 0.7)',
    width: '300px',
    height: '190px',
    borderRadius: '13px',
  };

  
  return (
    <div style={{ margin: '0 auto' }}>
      <div style={cardStyle}>
        <div style={buttonContainer}>
          <button style={buttonUpdate}>редактировать</button>
          <button style={buttonDelete}>удалить</button>
        </div>{' '}
        <img style={imgStyle} src={oneAnimal.img} alt="oneAnimal.img" />
        <h3 style={titleStyle}>{oneAnimal.name}</h3>
        <p style={bodyStyle}>{oneAnimal.body}</p>
      </div>
    </div>
  );
}
