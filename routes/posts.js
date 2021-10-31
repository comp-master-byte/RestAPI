const express = require('express')
const { updateOne } = require('../models/Post')
const router = express.Router()
const Post = require('../models/Post')


// SEND
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({message: err})
    }
})

// SUBMIT
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const postSaved = await post.save()
        res.json(postSaved)
    } catch(err) {
        res.json({message: err})
    }
})

// SPECIFIC post

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch(err) {
        res.json({message: err})
    }
})

// DELETE POST

router.delete('/:postId', async(req, res) => {
    try {
        const removePost = await Post.remove({_id: req.params.postId})
        res.json(removePost)
    } catch(err) {
        res.json({message: err})
    }
})

// Update the route

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        )
        res.json(updateOne)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router