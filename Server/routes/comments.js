import express from 'express';
import {
  createComment,
  getComment,
  deleteComment,
} from '../handlers/comments.js';
const commentsRouter = express.Router({ mergeParams: true });

commentsRouter.post('/', createComment);
commentsRouter.get('/:id', getComment);
commentsRouter.delete('/:id', deleteComment);

export default commentsRouter;