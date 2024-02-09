import express from 'express';
import { Animal } from '../../../db/models';

const searchRouter = express.Router();

searchRouter.get('/search', async (req, res) => {
  try {
    const { name, category } = req.query;
    console.log(name, category, '------------------------');

    const queries = { name, typeId: category };

    const animals = await Animal.findAll({ where: { ...queries } });

    res.json({ animals });
  } catch (error) {
    console.log(error);
    console.log('ошибОчка');
  }
});

export default searchRouter;
