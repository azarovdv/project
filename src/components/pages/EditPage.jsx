import React from 'react';
import InputSearch from '../ui/InputSearch';

export default function EditPage() {
  const cardStyle = {
    width: '300px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '13px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(78, 157, 57, 0.8))',
    position: 'relative',
  };
  const buttonUpdate = {
    width: '100px',
    minHeight: '15px',
    border: '1px solid black',
    borderRadius: '7px',
    color: 'white',
    fontSize: '10px',
    background: 'linear-gradient(to bottom, #1316a0, #1c34ba)',
  };
  const buttonDelete = {
    width: '100px',
    minHeight: '12px',
    border: '1px solid black',
    borderRadius: '7px',
    color: 'white',
    fontSize: '11px',
    background: 'linear-gradient(to bottom, #441b1b, #922626)',
  };
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>

        <form style={cardStyle}>
          <h5 style={{ textDecoration: 'underline', marginTop: '5px' }}>Изменение главной страницы</h5>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Название главной страницы
            <input style={{ width: '250px' }} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Изменить название" />
          </label>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Описание главной страницы
            <input style={{ width: '250px' }} name="desc" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Изменить описание" />
          </label>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Изменить изображение
            <input style={{ width: '250px', fontSize: '12px' }} type="file" className="form-control" placeholder="Изменить фото" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </label>
          <div>
            <button style={buttonUpdate} type="submit" className="btn btn-primary">Изменить</button>
          </div>
        </form>

        <form style={cardStyle}>
          <h5 style={{ textDecoration: 'underline', marginTop: '5px' }}>Добавление животного</h5>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Имя животного
            <input style={{ width: '250px' }} name="name" type="text" className="form-control" id="exampleInputPassword1" placeholder="Изменить имя" />
          </label>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Описание животного
            <input style={{ width: '250px' }} name="body" type="text" className="form-control" id="exampleInputPassword1" placeholder="Изменить описание" />
          </label>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Фото животного
            <input style={{ width: '250px', fontSize: '12px' }} type="file" className="form-control" id="exampleInputPassword1" placeholder="Изменить фото" />
          </label>
          <div>
            <button style={buttonDelete} type="submit" className="btn btn-primary">Добавить</button>
          </div>
        </form>

      </div>
      <InputSearch />
    </>
  );
}
