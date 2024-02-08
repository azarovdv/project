import express from 'express';
import { Animal, Photo } from '../../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req, res) => {
  const animals = await Animal.findAll({ includes: Photo });
  res.render('AnimalsPage', { animals });
});

export default animalsRouter;

// Пример запроса к БД
// const data = await Animal.findAll({
//   include: [{
//     model: Photo,
//     through: {
//       attributes: [],
//     },
//   }, { model: Type }],
// });
// console.log('--->', JSON.parse(JSON.stringify(data)));
