const express = require('express');
const router = express.Router();
const followersProxy = require ('./usersApiProxy')
router.get('/followers/:username',followersProxy);
router.get('/following/:username',followersProxy);
router.post('/',followersProxy);
router.delete('/:follower/:following', followersProxy); 
module.exports = router;