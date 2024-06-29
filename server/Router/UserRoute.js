const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

console.log(userController);

router.get('/', userController.getAllUser);

router.get('/detail-user', userController.getDetailUser);

module.exports = router;