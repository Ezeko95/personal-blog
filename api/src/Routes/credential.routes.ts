import express from "express";
import { getCredentials, createCredential } from "../Handler/credentialHandler";

const credentialRouter = express.Router();

credentialRouter.post("/credential", getCredentials);

credentialRouter.post("/", createCredential);

export default credentialRouter;
