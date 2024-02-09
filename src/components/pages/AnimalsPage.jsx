import React, { useState } from 'react';
import AnimalCard from '../ui/AnimalCard';
import InputSearch from '../ui/InputSearch';

export default function AnimalsPage({ animals, animalsCat, user }) {
  const typesId = animals.map((animal) => animal.typeId);
  const [arrOfAnimals, setArrOfAnimals] = useState(animals);

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '8px',
    justifyContent: 'center',
  };

  return (
    <div>
      <InputSearch
        arrOfAnimals={arrOfAnimals}
        setArrOfAnimals={setArrOfAnimals}
        typeId={typesId}
      />

      <div style={wrapperStyle}>
        {animals ? (animals.map((animal) => (
          <AnimalCard oneAnimal={animal} user={user} />
        )))
          : (animalsCat?.map((animal) => (
            <AnimalCard oneAnimal={animal} />
          )))}

      </div>
    </div>
  );
}
