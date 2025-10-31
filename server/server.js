import express from 'express';
import dotenv from 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);

app.get('/healthcheck', (req, res) => {
  res.send('Welcome to the Ping Server API');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});