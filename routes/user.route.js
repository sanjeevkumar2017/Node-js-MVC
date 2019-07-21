const UserController = require('../controllers/UserController');
const express  = require('express');
const router = express.Router();

// Create new user.
router.post('/api/user/create', UserController.create);



module.exports = router;