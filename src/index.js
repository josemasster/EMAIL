const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/routes-controller')

app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(3000,()=>{
    console.log('serve on port 3000')
})