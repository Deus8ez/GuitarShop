const router = require('express').Router()
const verify = require('./verify')

router.get('/', verify, (req, res)=>{
    res.json({post:'asd'})
})

module.exports = router