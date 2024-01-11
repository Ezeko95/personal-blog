import { Post as PostModel } from "../Models/Post";

interface IPost extends PostModel {
  title: string;
  content: string;
  image: string;
  category: string;
}

export const getAllPosts = async () => {
  try {
    return await PostModel.findAll();
  } catch (error) {
    console.error("Error getting post", error);
  }
};

export const createPostController = async (post: IPost) => {
  try {
    const newPost = await PostModel.create(post);
    return newPost;
  } catch (error) {
    console.error("Error creating post", error);
  }
};
