import { Post } from "../Models/Post";

interface PostData {
  title: string;
  content: string;
}

export const getAllPosts = async (post: PostData) => {
  const posts = await Post.findAll({
    include: {
      association: "admin",
      attributes: ["name"],
    },
  });

  return posts;
};

