import express from 'express';
import { PriceDay } from '../../../db/models';

const pricePageRouter = express.Router();

pricePageRouter.get('/', async (req, res) => {
  const prices = await PriceDay.findAll();

  res.render('PricePage', { prices });
});

export default pricePageRouter;
