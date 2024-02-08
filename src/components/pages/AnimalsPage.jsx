import React from 'react';
import AnimalCard from '../ui/AnimalCard';
import InputSearch from '../ui/InputSearch';

export default function AnimalsPage({ animalsArr }) {
  console.log(animalsArr);

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '8px',
    justifyContent: 'center',
  };

  return (
    <div>
      <InputSearch />

      <div style={wrapperStyle}>
        {animalsArr.map((animal) => (
          <AnimalCard oneAnimal={animal} />
        ))}
      </div>
    </div>
  );
}
