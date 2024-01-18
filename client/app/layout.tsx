/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { NavBar, Footer } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gianluca Cianchi Full Stack Developer || Professional Blog ",
  description:
    "Welcome to my personal blog where I talk about my experiences as a full stack developer and how technologies are influencing us with a psychological point of view.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" sizes="logo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
