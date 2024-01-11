import express from "express";
import { getPosts, createPostHandler } from "../Handler/postHandler";

const postRouter = express.Router();

postRouter.post("/", createPostHandler);

postRouter.get("/", getPosts);

postRouter.get("/:id");

export default postRouter;
