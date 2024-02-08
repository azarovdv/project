import express from 'express';
// import { Animals } from '../../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', (req, res) => {
  const animalsArr = [
    {
      name: 'tigr1111111',
      body: 'werwerqe  fbesrgwergewr',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602336.jpg',
    },

    {
      name: 'tigr3333333',
      body: 'werwerqe  fbesrgwergewr',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602337.jpg',
    },
  ];
  res.render('AnimalsPage', { animalsArr });
});

export default animalsRouter;
