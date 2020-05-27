const jwt = require('jsonwebtoken');
const config = require('../config/index');

const { JWT_SECRET } = config;

module.exports=(req, res, next) => {
    
    const token = req.header('auth-token')

    if(!token) return res.status(401).json({msg: 'access denied'})

    try {
        const verified = jwt.verify(token, JWT_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).send({ msg: 'invalid token' })
    }
    
}