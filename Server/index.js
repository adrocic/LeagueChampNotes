import authRouter from './routes/auth.js'
import commentsRouter from './routes/comments.js'
import allCommentsRouter from './routes/allComments.js'
import errorHandler from './handlers/error.js'
import { authenticate, authorize } from './middleware/auth.js'
import express from 'express'
import cors from 'cors'
const app = express()

// Use cors and body parser
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users/:id/comments', authenticate, authorize, commentsRouter)
app.use('/api/comments', authenticate, allCommentsRouter)

// Catch 404 not found
app.use(function (req, res, next) {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// Final generic error handler
app.use(errorHandler)

const PORT = 8081

// listen for the app running on specified port
app.listen(PORT, function () {
  console.log(`Server is starting on port: ${PORT}...`)
})
