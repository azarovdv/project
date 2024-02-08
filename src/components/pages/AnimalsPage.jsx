import React from 'react';
import AnimalCard from '../ui/AnimalCard';

export default function AnimalsPage({ animalsArr }) {
  console.log(animalsArr);

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Грид с автоматическим количеством столбцов и минимальной шириной 280px
    gap: '20px', // Отступ между карточками
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
        }}
      >
        Cтраничка с карточками животных
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
