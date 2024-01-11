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

export const getPostByIdController = async (id: number) => {
  console.log(id);
  try {
    const post = await PostModel.findOne({ where: { id } });
    console.log(post);
    return post;
  } catch (error) {
    console.error("Error getting post", error);
  }
};
