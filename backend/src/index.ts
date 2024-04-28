import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

import router from './router'

const app = express()

app.use(
  cors({
    credentials: true
  })
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

const port = process.env.PORT
const host = process.env.HOST

server.listen(parseInt(port), host, () => {
  console.log(`Server running on http://${host}:${port}/`)
})

const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@full-stack.qjwdqyp.mongodb.net/?retryWrites=true&w=majority&appName=full-stack`

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())
