const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    isPublic: { type: Boolean, default: true },
    image: {
      type: String,
      validate: {
        validator: function (url) {
          // URL validation
          return (
            url === undefined ||
            url === "" ||
            url.match(/\.(jpeg|jpg|gif|png)$/) != null
          );
        },
        message: "Please provide a valid image URL",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
