/* eslint-disable @next/next/no-img-element */
"use client";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRef } from "react";

const AdminPage: React.FC = () => {
  const [form, setForm] = useState<{
    title: string;
    content: string;
    image: File | null;
  }>({
    title: "",
    content: "",
    image: null,
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/posts", {
        title: form.title,
        content: form.content,
        image: form.image,
      });
      console.log(form);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2 bg-white p-8 shadow-md rounded-lg">
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
              id="title"
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
              className="border border-gray-300 rounded-md py-8 px-4 text-center hover:bg-grisCustom transition-transform transform hover:scale-105 "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={openFilePicker}>
              {/* Add drag and drop functionality here */}
              {form.image ? (
                <img
                  src={URL.createObjectURL(form.image)}
                  alt="preview"
                  className="w-40 mx-auto"
                />
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
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content"
              rows={4}></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
