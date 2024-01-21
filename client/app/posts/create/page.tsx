"use client";

import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [post, setPost] = useState<any>({
    title: "",
    content: "",
    description: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const posting = await axios.post("http://localhost:3001/api/posts", post);
      if (posting.status === 200) {
        console.log("success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="w-screen" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center p-60 bg-blue-200">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <label htmlFor="content">Content</label>
        <textarea name="content" value={post.content} onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          name="description"
          value={post.description}
          onChange={handleChange}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          value={post.image}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
