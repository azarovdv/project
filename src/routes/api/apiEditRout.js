import express from 'express';
import { MPInfo, Animal } from '../../../db/models';

const rout = express.Router();

// Черновик ручки, в планах мультер
rout.put('/mainpage', async (req, res) => {
  const { title, desc } = req.body;
  await MPInfo.update({ title, desc });
  res.sendStatus(200);
});

// Черновик ручки, в планах мультер
rout.put('/card/:id', async (req, res) => {
  const { id } = req.params;
  const { name, body } = req.body;
  const currentCard = await Animal.findByPk(id);
  currentCard.name = name;
  currentCard.body = body;
  await currentCard.save();
  res.sendStatus(200);
});

export default rout;
