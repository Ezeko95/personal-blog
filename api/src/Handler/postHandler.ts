import { Response, Request } from "express";
import { getAllPosts } from "../Controllers/postController";

export const getPosts = async (req: Request, res: Response) => {
  const post = req.body;
  try {
    if (!post.title || !post.content) {
      throw new Error("Title and content are required");
    }
    const newPost = await getAllPosts(post);
    res.status(200).json(newPost);
  } catch {
    console.error("Error creating post");
    res.sendStatus(500);
  }
};

export const createPost = (req: Request, res: Response) => {
  res.send("Hola");
};
