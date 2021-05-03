const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
//Import Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const testRoutes = require('./routes/test');
//Config App
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());

//db mongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'))
  .catch(() => console.log('db not connected !'));

//Routes Midlleware
app.use('/api', authRoutes);
app.use('/auth', userRoutes);
app.use('/test', testRoutes);

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`app is running on port ${port}`));
