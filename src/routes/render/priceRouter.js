import express from 'express';
// import { Price } from '../../../db/models';

const priceRouter = express.Router();

priceRouter.get('/', (req, res) => {
  res.render('PricePage');
});

export default priceRouter;
