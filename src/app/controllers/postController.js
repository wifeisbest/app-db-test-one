const Post = require('../models/Post')


class postController {
    // Get all posts
    async getAllposts (req, res, next){
        try {
            const posts = await Post.find({}).populate('author');
            res.status(200).json({
                status: "success",
                results: posts.length,
                data: {posts}
            })
        } catch (error) {
            res.json(error)
        }
    }
    // createOnePost
    async createOnePost (req, res, next){
        try {
            const{userId} = req.user;
            const post =  await Post.create({...req.body, author: userId});
            res.status(200).json({
                status: "success",
                data: {post}
            })
        } catch (error) {
            res.json(error)
        }
    }
    // UpdateOnePost
    async updateOnePost (req, res, next){
        try {
            const{postId} = req.params;
            const post =  await Post.findByIdAndUpdate(postId,{...req.body},{new : true, runValidator: true});
            res.status(200).json({
                status: "success",
                data: {post}
            })
        } catch (error) {
            res.json(error)
        }
    }
    // DeleteOnePost
    async deleteOnePost (req, res, next){
        try {
            const{postId} = req.params;
            await Post.findByIdAndDelete(postId);
            res.status(200).json({
                status: "success",
                mesenge: "Post has been deleted"
            })
        } catch (error) {
            res.json(error)
        }
    }
    index(req,res){
        res.json('duongs')
    }
}

module.exports = new postController;
