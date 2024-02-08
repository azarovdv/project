import express from 'express';
import bcrypt from 'bcrypt';
import { Admin } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookiesConfig from '../../config/cookiesConfig';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Please enter email and password');
  }

  const targetAdmin = await Admin.findOne({ where: { email } });

  if (!targetAdmin) {
    return res.status(400).send('Admin with this email does not exist');
  }

  const validPassword = await bcrypt.compare(password, targetAdmin.password);

  if (!validPassword) {
    return res.status(400).send('Wrong password');
  }

  const admin = { email: targetAdmin.email, password: targetAdmin.password };
  const { refreshToken, accessToken } = generateTokens({ admin });
  res
    .cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken ', refreshToken, cookiesConfig.refresh)
    .sendStatus(200);
});

apiAuthRouter.use('/logout', (req, res) => {
  res.clearCookie('accessToken')
    .clearCookie('refreshToken')
    .sendStatus(200);
});

export default apiAuthRouter;
