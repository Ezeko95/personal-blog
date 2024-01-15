import express from "express";
import {
  getPosts,
  createPostHandler,
  getPostByIdHandler,
  deletePostHandler,
} from "../Handler/postHandler";

const postRouter = express.Router();

postRouter.post("/", createPostHandler);

postRouter.get("/", getPosts);

postRouter.get("/:id", getPostByIdHandler);

postRouter.delete("/:id", deletePostHandler);

export default postRouter;
