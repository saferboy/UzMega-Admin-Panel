import express from "express"
import { engine } from "express-handlebars"

const app = express()

import dotenv from "dotenv"
dotenv.config()


app.engine('.hbs', engine({ extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './pages')


import cors from "cors"

// import api from "./api/router"

app.use('/', express.static('./public'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const port = process.env.PORT

// app.use('/api', api)


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/send', (req, res) => {
    res.render('sendLink')
})

app.get('/setting', (req, res) => {
    res.render('settings')
})

app.get('/sms', (req, res) => {
    res.render('sms-codes')
})

app.get('/succes', (req, res) => {
    res.render('success-error')
})



app.listen(port, () => {
    console.log(`Server is running ${port}`)
})