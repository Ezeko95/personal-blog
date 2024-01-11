import { Admin as AdminModel } from "../Models/Admin";

interface IAdmin extends AdminModel {
  username: string;
  password: string;
}

export const getAdminCredentials = async (admin: IAdmin) => {
  try {
    const token = await AdminModel.findOne({
      where: {
        username: admin.username,
        password: admin.password,
      },
    });
    return token;
  } catch (error) {
    console.error("Error getting admin credentials", error);
    throw error; // Re-throw the error to be caught in the calling function
  }
};

export const createAdminCredential = async (admin: IAdmin) => {
  try {
    const newAdmin = await AdminModel.create(admin);
    return newAdmin;
  } catch (error) {
    console.error("Error creating user", error);
  }
};
