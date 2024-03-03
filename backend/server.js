require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/song');
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser');


const app = express();
const port = process.env.PORT

const corsOptions = {
  origin: 'https://songify-two.vercel.app',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

app.use(cookieParser());

app.use('/api/users', authRoutes);
app.use('/api/songs', songRoutes);

app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
