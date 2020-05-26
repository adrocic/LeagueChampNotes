import mongoose from 'mongoose';
import { User } from './user.js';

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 160,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

CommentSchema.pre('remove', async function(next) {
  try {
    console.log('This object inside of CommentSchema.pre: ' + this);
    const user = await User.findById(this.user);
    user.comments.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    next(err);
  }
});

export const Comment = mongoose.model('Comment', CommentSchema);