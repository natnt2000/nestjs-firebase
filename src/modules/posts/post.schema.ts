import { Schema } from 'mongoose';

const POST_MODEL = 'post';
const PostSchema = new Schema(
  {
    title: String,
    description: String,
    view: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export { POST_MODEL, PostSchema };
