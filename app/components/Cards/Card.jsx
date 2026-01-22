"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { useState, useRef } from "react";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef(null); 
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 });

  const background = useMotionTemplate`radial-gradient(250px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.15), transparent 70%)`;

  return (
    <motion.div
      className="relative w-full bg-zinc-900 px-5 py-5 rounded-lg border border-zinc-700 overflow-hidden group"
      onMouseMove={(event) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setIsHovered(true);

        const { left, top } = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - left);
        y.set(event.clientY - top);
      }}
      onMouseLeave={() => {
        hoverTimeout.current = setTimeout(() => setIsHovered(false), 200);
      }}
    >

      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500"
        style={{
          background: background,
          opacity: isHovered ? 1 : 0, 
        }}
      />

      <div className="relative w-full flex items-start gap-1">
        <i className={`${data.icon} text-lg`}></i>
        <h3 className="text-lg md:text-xl font-semibold text-white z-10">
          {data.title}
        </h3>
      </div>

      <div className="relative flex flex-wrap gap-x-2 gap-y-3 text-sm items-start mt-3 z-10">
        {data.skills.map((tech, index) => (
          <p
            key={index}
            className="py-1 px-3 bg-zinc-800 border border-zinc-600 rounded-full text-white"
          >
            {tech}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
