"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Yay from "./Yay";
import Nay from "./Nay";

const Auth: React.FC = () => {
  const [showYay, setShowYay] = useState(false);
  const [showNay, setShowNay] = useState(false);
  const router = useRouter();
  const [authForm, setAuthForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/auth/credential", {
        username: authForm.username,
        password: authForm.password,
      });
      if (res.status) {
        setShowYay(true);

        setTimeout(() => {
          setShowYay(false);
          router.push("/admin");
        }, 2000);
      } else {
        setAuthForm({ username: "😡😡😡😡😡😡", password: "" });
        setShowNay(true);
        setTimeout(() => {
          setShowNay(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly h-screen">
      <h2 className="text-2xl font-bold animate-pulse md:text-4xl">
        I solemnly swear that I am up to no good.
      </h2>
      {showYay && <Yay />}
      {showNay && <Nay />}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-y-1">
        <label className="mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={authForm.username}
          onChange={handleChange}
          className="border border-gray-300 text-black rounded-md px-2 py-1 mb-2 text-center"
        />

        <label className="mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={authForm.password}
          onChange={handleChange}
          className="border border-gray-300 text-black rounded-md px-2 py-1 mb-2 text-center"
        />

        <button
          type="submit"
          onClick={() => handleChange}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
