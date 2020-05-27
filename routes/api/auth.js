const express = require('express');

const router = require('express').Router();

const mongoose = require('mongoose')

const bcrypt = require('bcrypt');

const config = require('../../config/index');

const jsonParser = express.json();

const jwt = require('jsonwebtoken');

const auth = require('../../middleware/auth');

const UserModel = require('../../models/user');

const { JWT_SECRET } = config;

router.post('/user/login', async (req, res) => {

    const user = await UserModel.findOne({email: req.body.email}).then(exUs => {return exUs})
    const token = jwt.sign({_id: user._id, username: user.username, email: user.email, password: user.password}, JWT_SECRET)
    
    if (user == null) {

        return res.status(400).send('no user')

    }

    try{

        if(await bcrypt.compare(req.body.password, user.password)){

            res.send({status: 'password success', username: user.username, token: token})
            
        } else {

            res.send({status: 'password failure', status: 'password success', username: user.username})
        
        }
    } catch {

        res.status(500).send()

    }
})

router.post('/user/register', jsonParser, async (req, res) => {
    
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.signUpPassword, salt)
        const userData = {username: req.body.signUpUsername, email: req.body.signUpEmail, password: hashedPassword}
        UserModel.findOne(userData)
        .then(exUs =>{
            if(exUs){
                console.log('exists')
            } else {
                new UserModel(userData).save(
                    (err, user) => {if (err) 
                         {return console.error(err)} else {
                            console.log(user.email + " saved to bookstore collection.")}
                        }
                    )
            }          
        }).catch(err => console.log(err))
    } catch {
        res.status(500).send()
    }

})

router.get('/user', auth, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password');
        if (!user) throw Error('User Does not exist');
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});
  
module.exports = router;
  