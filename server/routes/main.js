const express = require('express')
const router = express.Router()

// Routes
router.get('/', (req, res) => {
    const locals = {
        title: "Nodejs Blog",
        description: "Simple blog created with Nodejs, Express, and MongoDB"
    }
    res.render('index', { locals })
})

router.get('/about', (req, res) => {
    const locals = {
        title: "About | Nodejs Blog",
        description: "About this Nodejs blog"
    }
    res.render('about', { locals })
})

module.exports = router