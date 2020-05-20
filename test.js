const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('<form action="/test" method="POST"><input type="text" name="name" title="title"/><button>press</button></form>')
    
})

app.post('/test', (req, res)=>{
    console.log(req.body)
    res.send({
        "name": "Kop",
        "password": "password"
    })
})

app.listen(1000, ()=>{console.log("running")})