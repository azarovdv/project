import React from 'react';

export default function PricePage({ prices }) {
  const tableStyle = {
    background: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '10px',
    borderRadius: '13px',
    width: '60%',
    margin: '0 auto',
    height: '200px',
    textAlign: 'center',
  };
  const wrapper = {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  const titlePrice = {
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#e9d712',
    borderTopLeftRadius: '13px',
    borderTopRightRadius: '13px',
    margin: '0',
    padding: '25px 25px 13px',
  };
  const priceStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
  };
  const categoryPeopleStyle = {
    textAlign: 'right',
    width: '200px',
    fontSize: '23px',
    fontWeight: 'bold',
  };
  const theadStyle = {
    borderBottom: '2px solid white',
  };

  return (
    <div style={wrapper}>
      <h1 style={titlePrice}>Тарифы:</h1>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th />
            <th>Пн-Пт</th>
            <th>Сб-Вс/Праздники</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={categoryPeopleStyle}>Детский билет:</td>
            <td style={priceStyle}>{prices[0]?.price} ₽</td>
            <td style={priceStyle}>{prices[1]?.price} ₽</td>
          </tr>
          <tr>
            <td style={categoryPeopleStyle}>Взрослый билет:</td>
            <td style={priceStyle}>{prices[2]?.price} ₽</td>
            <td style={priceStyle}>{prices[3]?.price} ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
