import express from 'express'
import getRotations from '../handlers/champRotations'
const champRotationsRouter = express.Router({ mergeParams: true })

champRotationsRouter.get('/', getRotations)

export default champRotationsRouter
