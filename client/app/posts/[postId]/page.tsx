/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = ({ params }: { params: { postId: string } }) => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postId = params.postId;
        const response = await axios.get(
          `http://localhost:3001/posts/${postId}`
        );
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
        <div className="h-screen">
          <p>loading...</p>
        </div>
      )}
    </div>
  );
};

export default Post;
