import type { Metadata } from "next";
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
      </head>
      <body>{children}</body>
    </html>
  );
}
