import React, { useState } from 'react';
import AnimalCard from '../ui/AnimalCard';
import InputSearch from '../ui/InputSearch';

export default function AnimalsPage({ animals, animalsCat }) {

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '8px',
    justifyContent: 'center',
  };


  return (
    <div>
      {/* <InputSearch /> */}

      <div style={wrapperStyle}>
        {animals ? (animals.map((animal) => (
          <AnimalCard oneAnimal={animal} />
        )))
          : (animalsCat?.map((animal) => (
            <AnimalCard oneAnimal={animal} />
          )))}
      </div>
    </div>
  );
}
