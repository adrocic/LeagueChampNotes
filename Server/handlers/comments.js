/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as db from '../models/index.js'

export const createComment = async function (req, res, next) {
  try {
    const comment = await db.Comment.create({
      text: req.body.text,
      user: req.params.id,
    })
    const foundUser = await db.User.findById(req.params.id)
    foundUser.comments.push(comment._id)
    await foundUser.save()
    const foundComment = await db.Comment.findById(comment._id).populate(
      'user',
      { username: true, profileImageUrl: true }
    )
    return res.status(201).json(foundComment)
  } catch (err) {
    return next(err)
  }
}

// /api/users/:id/comments/:id
export const getcomment = async function (req, res, next) {
  try {
    const comment = await db.Comment.findById(req.params.comment_id)
    return res.status(200).json(comment)
  } catch (error) {
    return next(error)
  }
}

export const deletecomment = async function (req, res, next) {
  try {
    const foundComment = await db.Comment.findById(req.params.comment_id)
    await foundComment.remove()
    return res.status(200).json(foundComment)
  } catch (error) {
    return next(error)
  }
}
