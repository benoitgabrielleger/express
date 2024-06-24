// GUIDE
// Guide Title: Build a REST API With Node.js, Express & MongDB
// Guide Link: https://www.youtube.com/watch?v=fgTGADljAeg

// PREREQUISITES
// npm init
// npm install express mongoose
// npm i --save-dev dotenv nodemon

// NOTE
// nodemon will allow to refresh our server every time we make changes without having to manually end it and restart it.
// mongoose simplifies the interaction with MongoDB.

// RUN
// npm run devStart

// TO TEST REST API
// Install "Rest Client" extension in Vscode.
// You can use file with extension ".rest" or ".http" to send requests.

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import subscribersRouter from './routes/subscribers.js'

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// EXPRESS
const app = express()
app.use(express.json())

// ROUTES
app.use('/subscribers', subscribersRouter)

// MONGOOSE
const uri = process.env.DATABASE_URL
const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
mongoose.connect(uri, connectOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err))

// LISTEN
app.listen(3000, () => console.log('Server Started'))