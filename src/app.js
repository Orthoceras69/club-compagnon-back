import express from 'express';
import morgan from 'morgan';
import cookieParser  from 'cookie-parser';
import api from '#src/routes/api/index';
import connect from './db/connect.js';

const app = express()
connect()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({ message: 'yeah 👩‍🎤'})
});

app.use('/api/v1', api)


export default app