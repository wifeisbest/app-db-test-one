const express = require('express');
const router = express.Router();
const verify = require('../midleware/veryfyToken');


const posts = require('../app/controllers/postController');

router.get('/', posts.index)

router.get('/getAll', posts.getAllposts);
router.post('/createOnePost',verify,   posts.createOnePost);
router.put('/:postId', verify,   posts.updateOnePost);
router.delete('/:postId',verify, posts.deleteOnePost);




module.exports = router;
