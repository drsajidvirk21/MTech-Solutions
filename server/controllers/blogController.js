const blogService = require('../services/blogService');

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogService.getAll();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await blogService.getById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error.message);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

const createPost = async (req, res) => {
  try {
    const postId = await blogService.create(req.body);
    res.status(201).json({ id: postId, message: 'Post created' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updated = await blogService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post updated' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const deleted = await blogService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };