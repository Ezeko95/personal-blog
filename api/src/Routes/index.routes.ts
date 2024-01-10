import express from "express";
import credentialRouter from "./credential.routes";

const router = express.Router();

router.use("/auth", credentialRouter);

export default router;
