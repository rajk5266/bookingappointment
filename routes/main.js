const path = require('path');

const express = require('express');

const formcontroller = require('../controllers/maincont')

const router = express.Router();

router.get('/',formcontroller.showform);

router.get('/users',formcontroller.getUser);

router.post('/users', formcontroller.submitform)

router.delete('/users/:id', formcontroller.deleteUser)

router.put('/users/:id', formcontroller.updateUser)

module.exports = router;
