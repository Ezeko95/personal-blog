import { Response, Request } from "express";
import {
  getAllPosts,
  createPostController,
} from "../Controllers/postController";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const newPost = await getAllPosts();
    res.json(newPost);
  } catch {
    console.error("Error creating post");
    res.sendStatus(500);
  }
};

export const createPostHandler = async (req: Request, res: Response) => {
  const post = req.body;
  try {
    if (!post.title || !post.content || !post.image) {
      throw new Error("Title and content are required");
    }
    const newPost = await createPostController(post);
    res.json(newPost);
  } catch {
    console.error("Error creating post");
    res.sendStatus(500);
  }
};
