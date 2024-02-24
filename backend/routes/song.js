const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SongsController = require('../controllers/songs')



router.get('/', auth.protect, SongsController.getSongs);

router.post('/', auth.protect, SongsController.createSong);

router.put('/:songid', auth.protect, SongsController.updateSong);

router.delete('/:songid', auth.protect, SongsController.deleteSong);

// router.get('/', auth.protect, SongsController.getSongs);
  


// Other routes for creating, updating, and deleting songs...

module.exports = router;
