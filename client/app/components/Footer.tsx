/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-grisCustom dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <img src="/profile-removebg.png" className="h-32" alt="logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a>Full Stack Developer</a>
                </li>
                <li className="mb-4">
                  <a>ciangianluca@hotmail.com</a>
                </li>
                <li>
                  <a className="flex flex-row items-center gap-x-1">
                    (+34)670-746587
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/gianluca-cianchi"
                    className="hover:underline "
                    target="_blank"
                    rel="noopener noreferrer">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ezeko95"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a className="hover:underline">Developed by Gianluca Cianchi™</a>.
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
