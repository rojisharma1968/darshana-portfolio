"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const containerVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.87, 0, 0.13, 1],
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex overflow-hidden z-20 bg-zinc-900 items-center justify-between w-full px-5 py-2.5">
      <Link href="/" className="text-gradient text-lg font-bold">
        I’m Darshana
      </Link>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3"
      >
        {[
          {
            text: "about",
            icon: "ri-user-line",
          },
          {
            text: "works",
            icon: "ri-suitcase-line",
          },
        ].map((link, index) => (
          <motion.div key={link.text + index} variants={childVariants}>
            <Link
              href={`/${link.text}`}
              className={`text-base flex ${
                pathname.split("/")[1] == link.text ? "bg-indigo-500" : "bg-zinc-700"
              } hover:bg-indigo-500 duration-300 rounded-full px-3.5 py-1 gap-1 capitalize`}
            >
              <i className={`${link.icon} text-sm`}></i>
              {link.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
