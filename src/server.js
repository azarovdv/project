import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import mainPageRout from './routes/render/mainPageRout';
import adminRouter from './routes/render/adminRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import apiEditRout from './routes/api/apiEditRout';

// тут импорт роутингов
import animalsRouter from './routes/render/animalsRouter';

import resLocals from './middlewares/resLocals';
import searchRouter from './routes/api/apiSearchRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

// здесь роутинг

app.use('/', mainPageRout);
app.use('/admin', adminRouter);
app.use('/api', apiAuthRouter);
app.use('/api', searchRouter);
app.use('/animals', animalsRouter);
app.use('/api/edit', apiEditRout);

app.listen(PORT, () => console.log(`Все ОК ${PORT}`));
