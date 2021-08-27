const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})
app.get('/js', (req,res)=>{
    res.sendFile(path.join(__dirname,'./client.js'))
})
app.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,'./style.css'))
})


app.use('/js', express.static(path.join(__dirname, './client.js')))
app.use('/css', express.static(path.join(__dirname, './stule.css')))

axios.get('https://dep-lab.herokuapp.com/second-page', (res,req)=>{
    res.sendFile(path.join(__dirname,'./second-page.html'))
})






const PORTNUMBER = process.env.PORT || 4000
app.listen(PORTNUMBER,()=>{
    console.log(`Running on port ${PORTNUMBER}`)
}) 
