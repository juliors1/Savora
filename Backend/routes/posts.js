const express = require("express");
const {
  savePost,
  ratePost,
  getExplorePost,
  submitPost,
  sharePost,
  getUserPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/save", authMiddleware, savePost);
router.post("/rate", authMiddleware, ratePost);
router.get("/explore", getExplorePost);
router.post("/", authMiddleware, submitPost);
router.post("/share", authMiddleware, sharePost);
router.get("/my-posts", authMiddleware, getUserPost); // Get all user-created Post
router.put("/:id", authMiddleware, updatePost); // Update a Post
router.delete("/:id", authMiddleware, deletePost); // Delete a Post

module.exports = router;
