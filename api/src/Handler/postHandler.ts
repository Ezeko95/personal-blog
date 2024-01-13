import { Response, Request } from "express";
import {
  getAllPosts,
  createPostController,
  getPostByIdController,
} from "../Controllers/postController";

export const getPosts = async (res: Response) => {
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
      throw new Error("Title, image and content are required");
    }
    const newPost = await createPostController(post);
    res.json(newPost);
  } catch (error) {
    console.error("Error creating post", error);
    res.sendStatus(500);
  }
};

export const getPostByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const post = await getPostByIdController(id);
    res.json(post);
  } catch (error) {
    console.error("Error getting post", error);
    res.sendStatus(500);
  }
};
