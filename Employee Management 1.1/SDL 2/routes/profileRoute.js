const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/profile', profileController);
router.put('/profile', profileController.updateProfile);

module.exports = router;