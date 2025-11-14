const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// GET / HOME
router.get('/', async (req, res) => {
    const locals = {
        title: "NodeJS Blog",
        description: "Simple blog created with Nodejs, Express, and MongoDB"
    }
    
    try {
        const data = await Post.find()
        res.render('index', { locals, data })
    }
    catch (error) {
        console.error(error)
    }
})

router.get('/about', (req, res) => {
    const locals = {
        title: "About | NodeJS Blog",
        description: "About this Nodejs blog"
    }
    res.render('about', { locals })
})

router.get('/contact', (req, res) => {
    const locals = {
        title: "Contact | NodeJS Blog",
        description: "Contact the creator of this"
    }
    res.render('contact', { locals })
})

// function insertPostData() {
//     try {
//         Post.insertMany([
//             {
//                 title: "Building a blog",
//                 body: "This is the body text"
//             }
//         ])
//         console.log('Post data inserted')
//     }
//     catch (err) {
//         console.error('Insert error:', err)
//     }
// }
// insertPostData()

module.exports = router