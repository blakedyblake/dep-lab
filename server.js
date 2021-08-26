const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})
const URLs = {
    "The quacken" : "https://i.redd.it/f3x0sem47ib61.jpg"
}








const PORTNUMBER = process.env.PORT || 4000
app.listen(PORTNUMBER,()=>{
    console.log(`Running on port ${PORTNUMBER}`)
}) 
