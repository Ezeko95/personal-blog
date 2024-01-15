/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts/1");
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="mt-24">
      {post ? (
        <div
          key={post.id}
          className="flex flex-col items-center justify-center h-content mb-10">
          <img src={post.image} alt="post-image" className="w-2/4 h-2/4" />
          <div className="p-10 rounded-sm bg-grisCustom w-2/4 h-3/4">
            <h1 className="p-5 text-5xl">{post.title}</h1>
            <p>{post.content}</p>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Post;
