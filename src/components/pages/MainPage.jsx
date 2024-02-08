import React from 'react';

export default function MainPage() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20%',
    opacity: '0.8',
    width: 'auto-fill',
  };
  const center = {
    display: 'flex',
    justifyContent: 'center',

  };
  return (
    <div style={center}>
      <h1 style={style} className="alert alert-success" role="alert">
        Дороу
      </h1>
    </div>

  );
}
