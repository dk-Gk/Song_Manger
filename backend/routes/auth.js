const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AuthsController = require('../controllers/auths');

router.post('/signup', AuthsController.signUp);

router.post('/signin', AuthsController.signin);

router.post('/logout', AuthsController.logout);

router.route('/profile/:id').get(auth.protect, AuthsController.getUserProfile).put(auth.protect, AuthsController.updateUserProfile)

module.exports = router;
