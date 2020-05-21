const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const path = require('path')
const cors = require('cors')
const jsonParser = express.json();

const jwt = require('jsonwebtoken')
require('dotenv').config()

const testRoute = require('./utils/test')

const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const db = mongoose.connect(process.env.DATABASE)

const UserSchema = mongoose.Schema({username: String, email: String, password: String}); 

const UserModel = mongoose.model('Users', UserSchema);

const productSchema = mongoose.Schema({id: Number, guitarName: String, guitarCost: Number, quantity: Number});

const acousticProductsModel = mongoose.model('AcousticGuitars', productSchema);
const electricProductsModel = mongoose.model('ElectricGuitars', productSchema);


const acousticGuitars = [ 
    {
      id: 1,
      guitarName: "Mark 1",
      guitarCost: 100,
      quantity: 1
    },
    {
      id: 2,
      guitarName: "Mark 2",
      guitarCost: 90,
      quantity: 1
    },
    {
      id: 3,
      guitarName: "Mark 3",
      guitarCost: 110,
      quantity: 1
    },
    {
      id: 4,
      guitarName: "Mark 4",
      guitarCost: 70,
      quantity: 1
    },
    {
      id: 5,
      guitarName: "Mark 5",
      guitarCost: 85,
      quantity: 1
    },
    {
      id: 6,
      guitarName: "Mark 6",
      guitarCost: 50,
      quantity: 1
    }
  ]

const electricGuitars = [ 
{
    id: 7,
    guitarName: "Bibop 1",
    guitarCost: 100,
    quantity: 1
},
{
    id: 8,
    guitarName: "Bibop 2",
    guitarCost: 90,
    quantity: 1
},
{
    id: 9,
    guitarName: "Bibop 3",
    guitarCost: 110,
    quantity: 1
},
{
    id: 10,
    guitarName: "Bibop 4",
    guitarCost: 70,
    quantity: 1
},
{
    id: 11,
    guitarName: "Bibop 5",
    guitarCost: 85,
    quantity: 1
},
{
    id: 12,
    guitarName: "Bibop 6",
    guitarCost: 50,
    quantity: 1
}
]  

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())
const corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://serene-shore-97311.herokuapp.com'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware);
acousticGuitars.map(el => 
    acousticProductsModel.findOne(el)
        .then(exGuitar => {
                if(exGuitar){
                    return
                } else {
                    new acousticProductsModel(el).save(
                        (err, el) => {if (err) 
                                            {return console.error(err)
                                      } else {
                                            console.log(el + " saved to products collection.")}
                                    }
                        )
                    }
                }
             )
)

electricGuitars.map(el => 
    electricProductsModel.findOne(el)
        .then(exGuitar => {
                if(exGuitar){
                    return
                } else {
                    new electricProductsModel(el).save(
                        (err, el) => {if (err) 
                                            {return console.error(err)
                                      } else {
                                            console.log(el + " saved to products collection.")}
                                    }
                        )
                    }
                }
             )
)

app.get('/acousticGuitars', jsonParser, async (req, res) => {
    const fetchedGuitars = await acousticProductsModel.find({})
    .then(res => {return res})
    res.send(fetchedGuitars)
})

app.get('/electricGuitars', jsonParser, async (req, res) => {
    const fetchedGuitars = await electricProductsModel.find({})
    .then(res => {return res})
    res.send(fetchedGuitars)
})

app.post('/user/signup', jsonParser, async (req, res) => {
    
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


app.post('/user/login', jsonParser, async (req, res) => {

    const user = await UserModel.findOne({email: req.body.email}).then(exUs => {return exUs})
    const token = jwt.sign({_id: user._id, username: user.username, email: user.email, password: user.password}, process.env.TOKEN_SECRET)
    
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

app.use('/test', testRoute)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log('running'))