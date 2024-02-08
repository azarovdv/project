import express from 'express';
// import { Animals } from '../../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', (req, res) => {
  const animalsArr = [
    {
      name: 'Tiger 1',
      body: 'lorem lorem woierj khrebve ERTEFlolorem woierj khrebve ERTEFremlorem woierj khrebve ERTEF woierj khrebvelorem woierj khrebve ERTEF ERTEFwoierj khrelorem woierj khrebve ERTEFbve ERTEF',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602336.jpg',
    },

    {
      name: 'Tiger 2',
      body: 'lorem lorem woierj khrebve ERTEFlolorem woierj khrebve ERTEFremlorem woierj khrebve ERTEF woierj khrebvelorem woierj khrebve ERTEF ERTEFwoierj khrelorem woierj khrebve ERTEFbve ERTEF',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602337.jpg',
    },
    {
      name: 'Tiger 3',
      body: 'lorem lorem woierj khrebve ERTEFlolorem woierj khrebve ERTEFremlorem woierj khrebve ERTEF woierj khrebvelorem woierj khrebve ERTEF ERTEFwoierj khrelorem woierj khrebve ERTEFbve ERTEF',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602336.jpg',
    },
    {
      name: 'Tiger 4',
      body: 'lorem lorem woierj khrebve ERTEFlolorem woierj khrebve ERTEFremlorem woierj khrebve ERTEF woierj khrebvelorem woierj khrebve ERTEF ERTEFwoierj khrelorem woierj khrebve ERTEFbve ERTEF',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602337.jpg',
    },
    {
      name: 'Tiger 5',
      body: 'lorem lorem woierj khrebve ERTEFlolorem woierj khrebve ERTEFremlorem woierj khrebve ERTEF woierj khrebvelorem woierj khrebve ERTEF ERTEFwoierj khrelorem woierj khrebve ERTEFbve ERTEF',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602336.jpg',
    },
    {
      name: 'Tiger 6',
      body: 'lorem lorem woierj khrebve ERTEFlolorem woierj khrebve ERTEFremlorem woierj khrebve ERTEF woierj khrebvelorem woierj khrebve ERTEF ERTEFwoierj khrelorem woierj khrebve ERTEFbve ERTEF',
      img: 'https://images.rugvista.net/image/desk_pdp_zoom/602337.jpg',
    },
  ];
  res.render('AnimalsPage', { animalsArr });
});

export default animalsRouter;
