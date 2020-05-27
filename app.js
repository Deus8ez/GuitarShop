const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');

const authRoutes = require('./routes/api/auth');
const acGuitarRoute = require('./routes/api/acGuitarRoute');
const elGuitarRoute = require('./routes/api/elGuitarRoute');

const { MONGO_URI } = config;

const app = express();

app.use(cors());

app.options('*', cors())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(morgan('dev'));

app.use(bodyParser.json());

const db = `${MONGO_URI}`;

mongoose.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use(authRoutes);
app.use(acGuitarRoute);
app.use(elGuitarRoute);



if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
module.exports = app 
// export default app;