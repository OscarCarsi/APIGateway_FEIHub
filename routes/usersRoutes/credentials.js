const express = require('express');
const router = express.Router();
const credentialsProxy = require ('./usersApiProxy')
router.post('/', credentialsProxy);
router.post('/login', credentialsProxy);

module.exports = router;