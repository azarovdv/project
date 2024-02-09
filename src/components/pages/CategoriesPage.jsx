import axios from 'axios';
import React from 'react';

export default function CategoriesPage() {
  const bod = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  };
  const cont = {
    display: 'flex',
    flexDirection: 'column',
    heigth: '100vh',
  };
  const cardStyleAll = {
    width: '65%',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '13px',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(78, 157, 57, 0.8))',
  };
  const fl = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  const cardStyleCat = {
    width: '100%',
    minHeight: '150px',
    border: '2px solid black',
    borderRadius: '13px',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(78, 157, 57, 0.8))',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
  };

  return (
    <div className="container" style={bod}>
      <div style={cont}>
        <div>
          <a href={`/animals`} style={linkStyle}><div style={cardStyleAll}>Все животные</div></a>
        </div>
        <div style={fl}>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
          <a href="/animals" style={linkStyle}>
            <div style={cardStyleCat}>
              категория
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
