import axios from 'axios';
import React, { useState } from 'react';

// export default function InputSearch({ value, onChange }) {
//   return (
//     <input aria-label="search-input" type="text" className="form-control mb-4" value={value} onChange={onChange} name="name" placeholder="Введите имя" />
//   );
// }
export default function InputSearch({ arrOfAnimals, setArrOfAnimals, typeId }) {
  const styleInput = {
    margin: '10px auto',
    width: '400px',
    height: '40px',
    backgroundColor: 'rgb(43 128 30 / 70%)',
    color: 'white',
  };

  const [searchAnimal, setSeachAnimal] = useState('');
  // const [arr, setArr] = useState([animals]);

  const findAnimalHandler = async () => {
    const response = await axios(`/api/search?name=${searchAnimal}&category=${typeId}`);
    console.log(searchAnimal, typeId);
    if (response.status === 200) {
      setArrOfAnimals(response.data.animals);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      findAnimalHandler();
    }
  };

  return (
    <input
      style={styleInput}
      aria-label="search-input"
      type="text"
      className="form-control mb-4"
      value={null}
      onChange={(e) => setSeachAnimal(e.target.value)}
      onKeyDown={handleKeyDown}
      name="search"
      placeholder="найти зверушку в нашем зоопарке"
    />
  );
}
