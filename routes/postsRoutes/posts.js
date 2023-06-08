const express = require('express');
const router = express.Router();
const postsProxy = require('./postsApiProxy')
router.post('/createPost', postsProxy);
router.put('/editPost', postsProxy);
router.delete('/deletePost/:id', postsProxy);
router.get('/postsAuthor/:author', postsProxy);
router.get('/postIdTitle', postsProxy);
router.get('/principalPosts', postsProxy);
router.get('/principalPostsTarget', postsProxy);
router.post('/addComment', postsProxy);
router.put('/editComment', postsProxy);
router.delete('/deleteComment', postsProxy);
router.put('/like/:id', postsProxy);
router.put('/dislike/:id', postsProxy);
router.put('/removeLike/:id', postsProxy);
router.put('/removeDislike/:id', postsProxy);
router.put('/addReport', postsProxy);
router.get('/reportedPost', postsProxy);
module.exports = router;