import express from 'express';

const rout = express.Router();

rout.get('/', (req, res) => {
  res.render('MainPage');
});

export default rout;
