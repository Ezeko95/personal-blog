import express from "express";
import credentialRouter from "./credential.routes";
import postRouter from "./post.routes";
const router = express.Router();

router.use("/auth", credentialRouter);
router.use("/posts", postRouter);

export default router;
