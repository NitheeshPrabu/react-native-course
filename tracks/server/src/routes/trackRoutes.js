const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

// All routers in trackRoutes should only be allowed if user is authenticated
router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.status(200).send({ tracks });
});

// Request body from the mobile app should match the trackSchema
router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    return res.status(422).send({ error: 'You must provide a name and some locations' });
  }

  try {
    const track = new Track({ userId: req.user._id, name, locations });
    await track.save();
    res.status(200).send(track);
  } catch (err) {
    return res.status(422).send({ error: 'Unable to create the track' });
  }
});

module.exports = router;
