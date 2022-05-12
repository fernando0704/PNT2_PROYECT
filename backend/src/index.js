import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = 3001