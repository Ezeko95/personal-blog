import { Post as PostModel } from "../Models/Post";

interface IPost extends PostModel {
  title: string;
  content: string;
  image: string;
  category: string;
}

export const getAllPosts = async () => {
  try {
    const posts = await PostModel.findAll();
    return posts;
  } catch (error) {
    console.error("Error controller getting post", error);
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

export const getPostByIdController = async (id: number) => {
  try {
    const post = await PostModel.findOne({ where: { id } });
    return post;
  } catch (error) {
    console.error("Error getting post", error);
  }
};

export const deletePostController = async (id: number) => {
  try {
    await PostModel.destroy({ where: { id } });
    return id;
  } catch (error) {
    console.error("Error deleting post", error);
  }
};
