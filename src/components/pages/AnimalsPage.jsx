import React from 'react';
import AnimalCard from '../ui/AnimalCard';

export default function AnimalsPage({ animalsArr }) {
  console.log(animalsArr);

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '8px',
    justifyContent: 'center',
  };

  return (
    <>
      <h1
        style={{
          fontSize: '22px',
          color: 'red',
          backgroundColor: 'black',
          textAlign: 'center',
          height: '50px',
        }}
      >
        INPUTS FOR SEARCH
      </h1>

      <div>
        <div style={wrapperStyle}>
          {animalsArr.map((animal) => (
            <AnimalCard oneAnimal={animal} />
          ))}
        </div>
      </div>
    </>
  );
}
