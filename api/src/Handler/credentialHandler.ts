import { Response, Request } from "express";
import {
  getAdminCredentials,
  createAdminCredential,
} from "../Controllers/credentialController";

export const getCredentials = async (req: Request, res: Response) => {
  const user = req.body;
  console.log(user.username, user.password);
  try {
    if (!user.username || !user.password) {
      throw new Error("User and password are required");
    }
    const newToken = await getAdminCredentials(user);
    res.json(newToken);
  } catch {
    console.error("Error getting credentials");
    res.send(500);
  }
};

export const createCredential = async (req: Request, res: Response) => {
  try {
    await createAdminCredential();
    res.json("User created");
  } catch {
    console.error("Error handler creating user");
    res.send(500);
  }
};
