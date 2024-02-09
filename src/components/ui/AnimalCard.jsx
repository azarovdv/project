import React from 'react';
import SliderPhoto from './SliderPhoto';

export default function AnimalCard({ oneAnimal, user }) {
  const cardStyle = {
    width: '300px',
    minHeight: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid black',
    borderRadius: '13px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(78, 157, 57, 0.8))',
    position: 'relative',
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
    color: '#f0cd59',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5px',
    margin: '0',
  };
  const bodyStyle = {
    fontSize: '14px',
    color: 'white',
  };
  const divTextStyle = {
    padding: '0 5px 23px',
    margin: '0',
    background: 'rgba(0, 0, 0, 0.7)',
    width: '300px',
    height: '170px',
    borderBottomLeftRadius: '13px',
    borderBottomRightRadius: '13px',
  };
  return (
    <div style={cardStyle}>
      <div style={buttonContainer}>
        {user
          ? (
            <>
              <button style={buttonUpdate}>Редактировать</button>
              <button style={buttonDelete}>Удалить</button>
            </>
          )
          : null}

      </div>
      <SliderPhoto oneAnimal={oneAnimal} />
      <div style={divTextStyle}>
        <h3 style={titleStyle}>{oneAnimal.name}</h3>
        <p style={bodyStyle}>{oneAnimal.body}</p>
      </div>
    </div>
  );
}
