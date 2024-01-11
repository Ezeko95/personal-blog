import { Response, Request } from "express";
import {
  getAdminCredentials,
  createAdminCredential,
} from "../Controllers/credentialController";

export const getCredentials = async (req: Request, res: Response) => {
  const admin = req.body;
  try {
    if (!admin.username || !admin.password) {
      throw new Error("User and password are required");
    }

    const newToken = await getAdminCredentials(admin);

    if (newToken) {
      res.json(newToken);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    console.error("Error getting credentials", error);
    res.sendStatus(500);
  }
};
export const createCredential = async (req: Request, res: Response) => {
  const admin = req.body;
  try {
    const newCredential = await createAdminCredential(admin);
    res.json(newCredential);
  } catch {
    console.error("Error handler creating user");
    res.sendStatus(500);
  }
};
