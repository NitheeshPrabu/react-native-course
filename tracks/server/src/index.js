require('../config/config');
require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

var port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance.');
});

mongoose.connection.on('error', err => {
  console.log('Error connecting to mongo.', err);
});

app.get('/', requireAuth, (req, res) => {
  res.status(200).send(`Your email: ${req.user.email}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
