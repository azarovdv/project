import express from 'express';
import { MPInfo, MPPhoto } from '../../../db/models';

const rout = express.Router();

rout.get('/', async (req, res) => {
  const greeting = await MPInfo.findAll();
  const photo = await MPPhoto.findAll();
  const initState = { greeting, photo };
  res.render('MainPage', initState);
});

export default rout;

// Пример запроса к БД
// const data = await Animal.findAll({
//   include: [{
//     model: Photo,-
//     through: {
//       attributes: [],
//     },
//   }, { model: Type }],
// });
// console.log('--->', JSON.parse(JSON.stringify(data)));
