import { Response, Request } from "express";
import {
  getAllPosts,
  createPostController,
  getPostByIdController,
  deletePostController,
} from "../Controllers/postController";

// Get all posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error("Error getting all posts", error);
    return res.sendStatus(500);
  }
};

// Create post
export const createPostHandler = async (req: Request, res: Response) => {
  const post = req.body;
  try {
    if (!post.title || !post.content || !post.image) {
      throw new Error("Title, image and content are required");
    }
    const newPost = await createPostController(post);
    return res.json(newPost);
  } catch (error) {
    console.error("Error creating post", error);
    return res.sendStatus(500);
  }
};

// Get post by id
export const getPostByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const post = await getPostByIdController(id);
    res.json(post);
  } catch (error) {
    console.error("Error getting post", error);
    return res.sendStatus(500);
  }
};

// Delete post by id
export const deletePostHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await deletePostController(id);
    res.json(`Post ${id} has been deleted`).send(200);
  } catch (error) {
    console.error("Error deleting post", error);
    return res.sendStatus(500);
  }
};
