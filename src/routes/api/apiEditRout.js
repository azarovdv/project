import fs from 'fs/promises';
import express from 'express';
import sharp from 'sharp';
import {
  MPInfo, MPPhoto, Animal, Photo, Type,
} from '../../../db/models';
import upload from '../../middlewares/multer';

const rout = express.Router();

// Черновик ручки, в планах мультер
rout.patch('/mainpage/:id', async (req, res) => {
  await MPInfo.update({
    title: req.body.title,
    desc: req.body.desc,
  }, { where: { id: req.params.id } });
  res.sendStatus(200);
});

rout.patch('/mainpage/photo/:id', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File not found' });
  }
  const name = `/img/${Date.now()}.webp`;
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  await fs.writeFile(`./public/${name}`, outputBuffer);

  await MPPhoto.update({
    path: name,
  }, { where: { id: req.params.id } });
  res.sendStatus(200);
});

rout.post('/add/animal', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }
    const { category } = req.body;
    const type = await Type.findOne({ where: { name: category } });

    const name1 = `/img/${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/${name1}`, outputBuffer);
    const animal = await Animal.create({
      name: req.body.name,
      body: req.body.body,
      typeId: type.id,
    });
    const photo = await Photo.create({
      path: name1,
    });

    await animal.addPhoto(photo);

    res.json(animal);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default rout;
