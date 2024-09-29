const express = require('express');
const { login, updatePassword } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', login);
router.post('/update-password', protect, updatePassword);

module.exports = router;
