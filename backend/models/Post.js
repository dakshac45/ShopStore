
import mongoose from"mongoose";
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

export default Post;