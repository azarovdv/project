import React from 'react';

export default function PricePage() {
  const styleContainer = {
    height: '100vh',
    margin: '30px 0 0 0',
  };
  const styleTable = {
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const styleTitle = {
    color: 'red',
    textAlign: 'center',
    fontSize: '24px',
  };
  //   const styleTitle = {};
  //   const styleTitle = {};

  return (
    <div style={styleContainer}>
      <h1 style={styleTitle}>Тарифы</h1>
      <table border="1" style={styleTable}>
        <tr>
          <th>Посетитель</th>
          <th>Цена</th>
          <th>Цена выходной</th>
        </tr>
        <tr>
          <td>Дети</td>
          <td>200</td>
          <td>500</td>
          <td>руб</td>
        </tr>
        <tr>
          <td>Взрослые</td>
          <td>500</td>
          <td>1000</td>
          <td>руб</td>
        </tr>
      </table>
    </div>
  );
}
