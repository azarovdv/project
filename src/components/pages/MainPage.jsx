import React from 'react';

export default function MainPage({ greeting, photo }) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15px',
  };
  const imageStyle = {
    width: '700px',
    height: '500px',
    marginTop: '20px',
  };
  return (
    <div style={style}>
      <h1 style={style} className="alert alert-success" role="alert">
        {greeting[0].title}
        <br />
        {greeting[0].desc}
        <br />
        <img style={imageStyle} src={photo[0].path} alt="" />
      </h1>
    </div>
  );
}
