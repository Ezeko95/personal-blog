/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import LoadingCard from "./LoadingCard";
const Card = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <>
      {isLoaded ? (
        <div className="max-w-lg mx-auto">
          <div className="bg-grisCustom shadow-md  rounded-lg max-w-sm mb-5">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt="asd"
                loading="lazy"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Titulo de post
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className=" flex justify-between items-center">
                <a
                  className="text-white bg-gray-800 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center"
                  href="#">
                  Continue reading
                </a>
                <img
                  src="profile.jpeg"
                  alt="profile"
                  width={40}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingCard />
      )}
    </>
  );
};

export default Card;
