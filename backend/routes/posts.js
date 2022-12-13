import express from 'express';
import Post from '../models/Post';
import router from express.Router();

router.post("/", async (req, res) => {
  try {
    let post = new Post(req.body);
    post = await post.save();
    res.status(200).json({
      status: 200,
      data: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/list", async (req, res) => {
  try {
    let posts = await Post.find();
    res.status(200).json({
      status: 200,
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});


export default router;