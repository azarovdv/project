import express from 'express';
import { Animal, Photo } from '../../../db/models';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req, res) => {
  const animals = await Animal.findAll({
    include: {
      model: Photo,
      through: {
        attributes: [],
      },
    },
  });
  res.render('AnimalsPage', { animals });
});

animalsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const animalsCat = await Animal.findAll({
    where: { typeId: id },
    include: {
      model: Photo,
      through: {
        attributes: [],
      },
    },
  });
  res.render('AnimalsPage', { animalsCat });
});

export default animalsRouter;

// Пример запроса к БД
// const animals = await Animal.findAll({
//   include: [{
//     model: Photo,
//     through: {
//       attributes: [],
//     },
//   }, { model: Type }],
// });
// console.log('--->', JSON.parse(JSON.stringify(animals)));
