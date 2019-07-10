const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/addProfile', userController.addProfile);
router.post('/uploadProfile', userController.uploadProfile);
router.get('/Profile', userController.getProfile);
router.get('/review', userController.review)

module.exports = router;