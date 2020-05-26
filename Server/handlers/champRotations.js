/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import rotationsInstance from '../models/rotationsInstance'

export const getChampRotations = async (req, res, next) => {
  try {
    const champs = await rotationsInstance.get()
    res.json(champs)
  } catch (err) {
    next(err)
  }
}
