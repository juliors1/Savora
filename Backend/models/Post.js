const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }],
    averageRating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    shared: { type: Boolean, default: false },
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

// Method to calculate average rating
PostSchema.methods.calculateAverageRating = function () {
  if (this.ratings.length === 0) {
    this.averageRating = 0;
  } else {
    this.averageRating =
      this.ratings.reduce((sum, r) => sum + r.rating, 0) / this.ratings.length;
  }
};

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
