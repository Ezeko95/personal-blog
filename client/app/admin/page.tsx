/* eslint-disable @next/next/no-img-element */
"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useRef } from "react";

const AdminPage: React.FC = () => {
  const [showYay, setShowYay] = useState(false);
  const [showNay, setShowNay] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState<{
    title: string;
    content: string;
    image: File | null;
  }>({
    title: "",
    content: "",
    image: null,
  });
  const [categories, setCategories] = useState<string[]>([
    "Cibersecurity",
    "Programming",
    "Web Development",
    "Psychology",
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Add styles for the drag-over effect if needed
    // e.currentTarget.classList.add('drag-over-style');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Handle dropped files
    const files = e.dataTransfer.files;
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle files selected through the file input
    if (e.target.files) {
      const files = e.target.files;
      setForm({ ...form, image: files[0] });
      console.log("Selected files:", files, form.image);
    }
  };

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const deleteImage = () => {
    setForm({ ...form, image: null });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      console.log(form);
      const res = await axios.post("http://localhost:3001/posts", {
        title: form.title,
        content: form.content,
        image: form.image,
      });
      console.log(res);
      if (res.status) {
        setShowYay(true);
        setTimeout(() => {
          setShowYay(false);
        }, 2000);
      } else {
        setShowNay(true);
        setTimeout(() => {
          setShowNay(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit mt-4">
      <div className="w-1/2 bg-white p-8 shadow-md rounded-lg">
        <button
          onClick={() => handleClick()}
          className="mb-4 text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-2 text-center inline-flex items-center">
          Home
        </button>
        <h2 className="text-2xl font-bold mb-4">Admin Page</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="drag-drop"
              className="block text-gray-700 font-bold mb-2">
              Drag and Drop
            </label>
            <div
              className="border border-gray-300 rounded-md py-8 px-4 text-center hover:bg-grisCustom "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={openFilePicker}>
              {/* Add drag and drop functionality here */}
              {form.image ? (
                <div>
                  <img
                    src={URL.createObjectURL(form.image)}
                    alt="preview"
                    className="w-40 mx-auto"
                  />
                  <button
                    onClick={deleteImage}
                    className="bg-red-500 text-white transition hover:transition-transform hover:scale-105 hover:bg-gray-700 ease-in-out p-2 rounded-sm mt-2">
                    Delete Image
                  </button>
                </div>
              ) : (
                <p>Drag and drop your files here</p>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={form.content}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content"
              rows={15}></textarea>
          </div>
          <div className="mb-4">
            {categories.map((category) => (
              <label
                key={category}
                className="inline-flex flex-col items-center mx-auto">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border border-gray-300"
                  name="category"
                  value={category}
                />
                <span className="ml-2">{category}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
      <>
        {showYay && (
          <div className="bg-green-400 text-white p-4 rounded-md">
            Post created! 🥳
          </div>
        )}
        {showNay && (
          <div className="bg-red-400 text-white p-4 rounded-md">
            Something went wrong 😥
          </div>
        )}
      </>
    </div>
  );
};

export default AdminPage;
