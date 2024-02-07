import express from 'express';
// import { Animals } from '../../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', (req, res) => {
  const animalsArr = [
    {
      name: 'tigr1111111',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr222222',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'PHOTO ANIMAL',
    },
  ];
  res.render('AnimalsPage', { animalsArr });
});

export default animalsRouter;
