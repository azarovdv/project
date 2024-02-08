import React from 'react';

// export default function InputSearch({ value, onChange }) {
//   return (
//     <input aria-label="search-input" type="text" className="form-control mb-4" value={value} onChange={onChange} name="name" placeholder="Введите имя" />
//   );
// }
export default function InputSearch() {
  const styleInput = {
    margin: '10px auto',
    width: '400px',
    height: '40px',
    backgroundColor: 'rgb(43 128 30 / 70%)',
    color: 'white',
  };
  return (
    <input
      style={styleInput}
      aria-label="search-input"
      type="text"
      className="form-control mb-4"
      value={null}
      onChange={null}
      name="search"
      placeholder="найти зверушку в нашем зоопарке"
    />
  );
}
