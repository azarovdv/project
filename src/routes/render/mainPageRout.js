import express from 'express';

const rout = express.Router();

rout.get('/', async (req, res) => {
  res.render('MainPage');
});

export default rout;


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
