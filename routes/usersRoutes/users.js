const express = require('express');
const router = express.Router();
const proxyUsers = require ('./usersApiProxy')
router.get('/', proxyUsers); 
router.post('/', proxyUsers);
router.put('/:username', proxyUsers);
router.patch('/:username', proxyUsers);

module.exports = router;
