import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('AdminPage');
});

router.get('/edit', (req, res) => {
  res.render('EditPage');
});

export default router;
