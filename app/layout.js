"use client";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>The Art of Digital Development</title>
        <meta
          name="description"
          content="Engineering sophisticated, high-performance web solutions for the modern digital world."
        />
        <meta
          name="keywords"
          content="web development, digital solutions, high-performance websites, scalable applications, modern web technology, innovative web design, software development, full-stack development"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
