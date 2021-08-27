const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())
app.get("/DB",(req,res)=>{
    res.sendFile(path.join(__dirname, './sampleDB'))
})

const DB = require('./sampleDB')

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})
app.get('/js', (req,res)=>{
    res.sendFile(path.join(__dirname,'./client.js'))
})
app.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,'./style.css'))
})
app.get('/second',(req,res)=>{
    res.sendFile(path.join(__dirname,'second-page.html'))
})

const baseURL = `https://dep-lab.herokuapp.com`


app.use('/js', express.static(path.join(__dirname, './client.js')))
app.use('/css', express.static(path.join(__dirname, './stule.css')))
app.use('/second',express.static(path.join(__dirname,'second-page.html')))

app.get(baseURL + '/DB',(req,res)=>{
    console.log(DB)
    res.status(200).send(DB)
})




const PORTNUMBER = process.env.PORT || 4000
app.listen(PORTNUMBER,()=>{
    console.log(`Running on port ${PORTNUMBER}`)
}) 
