import React from 'react';
import AnimalCard from '../ui/AnimalCard';
import InputSearch from '../ui/InputSearch';

export default function AnimalsPage({ animals }) {
  console.log(animals);

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
        {animals.map((animal) => (
          <AnimalCard oneAnimal={animal} />
        ))}
      </div>
    </div>
  );
}
