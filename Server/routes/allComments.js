import express from 'express'
import { getAllComments } from '../handlers/getAllComments.js'
const allCommentsRouter = express.Router({ mergeParams: true })

allCommentsRouter.get('/', getAllComments)

export default allCommentsRouter
