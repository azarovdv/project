import React from 'react';

export default function AnimalsPage({ animalsArr }) {
  console.log(animalsArr);
  return (
    <>
      <h1>Cтраничка с карточками животных</h1>
      <div>
        <div className="card">
          <h1>Animals</h1>
          {animalsArr.map((animal) => (
            <p>{animal.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}
