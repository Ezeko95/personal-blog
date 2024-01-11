import express from "express";
import { getPosts, createPostHandler } from "../Handler/postHandler";

const postRouter = express.Router();

postRouter.get("/", getPosts);

postRouter.post("/", createPostHandler);

export default postRouter;
