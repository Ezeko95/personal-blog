import Admin from "../Models/Admin";

interface AdminData extends Admin {
  username: string;
  password: string;
}

export const getAdminCredentials = async (admin: AdminData) => {
  const token = await Admin.findAll({
    where: {
      username: admin.username,
      password: admin.password,
    },
  });
  return token;
};

export const createAdminCredential = async () => {
  try {
    const newAdmin = await Admin.create({
      username: "admin",
      password: "admin",
    });
    return newAdmin;
  } catch {
    console.error("Error creating user");
  }
};
