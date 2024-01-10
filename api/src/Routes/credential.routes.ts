import express from "express";
import { getCredentials, createCredential } from "../Handler/credentialHandler";

const credentialRouter = express.Router();

credentialRouter.get("/", getCredentials);

credentialRouter.post("/", createCredential);

export default credentialRouter;
