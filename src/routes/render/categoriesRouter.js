import express from 'express';
import { Type, Animal, Photo } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const names = await Type.findAll();
  res.render('CategoriesPage', { names });
});

export default router;
