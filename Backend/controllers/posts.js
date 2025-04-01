const Post = require("../models/Post");
const User = require("../models/User");
const axios = require("axios");
require("dotenv").config();
const mongoose = require("mongoose");

// Save a Post
exports.savePost = async (req, res) => {
  try {
    console.log("Request received to save post.");

    const { postId } = req.body;
    console.log("Post ID:", postId);

    console.log("User ID from request:", req.user?.id);

    const user = await User.findById(req.user.id);
    console.log("User found:", user);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Validate if postId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid postId format" });
    }

    const postObjectId = new mongoose.Types.ObjectId(postId); // Convert only if valid

    if (!user.savedPost.includes(postObjectId)) {
      user.savedPost.push(postObjectId);
      await user.save();
      console.log("Post saved successfully.");
    } else {
      console.log("Post already saved.");
    }

    res.json({
      message: "Post saved successfully",
      savedPost: user.savedPost,
    });
  } catch (error) {
    console.error("Error in savePost:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
// Add or Update a User's Rating for a Post
exports.ratePost = async (req, res) => {
  try {
    const { userId, rating } = req.body;

    if (!userId || !rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Invalid rating or user ID." });
    }

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Check if the user has already rated
    const existingRating = post.ratings.find(
      (r) => r.userId.toString() === userId
    );
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      post.ratings.push({ userId, rating });
    }

    // Recalculate and save the average rating
    post.calculateAverageRating();
    await post.save();

    res.json({
      message: "Rating updated",
      averageRating: post.averageRating,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all shared posts in Explore Page (Recipe Board)
exports.getAllSharedPost = async (req, res) => {
  try {
    const posts = await Post.find({ shared: true });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Submit a Post
exports.submitPost = async (req, res) => {
  try {
    const { title, ingredients, instructions, shared } = req.body;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newPost = new Post({
      title,
      ingredients,
      instructions,
      isPublic: isPublic || false,
    });

    await newPost.save();
    res.json({ message: "Post submitted successfully!", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Set Public
exports.setPublic = async (req, res) => {
  try {
    const { postId } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const post = await Post.findById(postId);

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.isPublic = true;
    await post.save();

    res.json({ message: "Post shared successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getUserPost = async (req, res) => {
  try {
    const post = await Post.find({ user: req.user.id });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, ingredients, instructions, shared } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Post ID format" });
    }

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the post has a user before calling toString()
    if (!post.user || !req.user) {
      return res
        .status(403)
        .json({ message: "Unauthorized - User field missing" });
    }

    // Ensure only the owner can update the post
    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update fields if provided
    if (title) post.title = title;
    if (ingredients) post.ingredients = ingredients;
    if (instructions) post.instructions = instructions;
    if (isPublic !== undefined) post.isPublic = isPublic;

    await post.save();
    res.json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received Post ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Post ID format" });
    }

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Ensure the user deleting the Post is the owner
    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Use deleteOne instead of remove
    await post.deleteOne();

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting Post:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
