"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./components/SectionHeading";
import Image from "next/image";
import { motion } from "motion/react";
import MacHeader from "./components/MacHeader";
import HomeCard from "./components/HomeCard";
import Cards from "./components/Cards/Cards";
import StatsSection from "./components/StatsSection";
import { ToastContainer } from "react-toastify";
import { handleContactForm } from "./form";
import LoadingSpinner from "./components/LoadingSpinner";
import ReCAPTCHA from "react-google-recaptcha";
const CodeEditor = dynamic(() => import("./components/CodeEditor"), {
  ssr: false,
});

const HomePage = () => {
  const [isSending, setSending] = useState(false);
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const handleScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full">
      <ToastContainer theme="dark" />

      <section className="hero bg-zinc-800 w-full py-10 ">
        <div className="flex flex-col lg:flex-row items-center w-[90%] gap-10 mx-auto">
          <div className="w-full lg:w-1/2 relative">
            <span className="animate-bounce bg-purple-300/20 capitalize py-1 ml-10 mb-3 px-2 rounded-sm inline-block text-sm border-[1px] border-purple-500/20 text-purple-500">
              Performance optimization
            </span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.87, 0, 0.13, 1],
                staggerChildren: 0.5,
              }}
              className="text-4xl md:text-6xl font-bold"
            >
              Hello!,
              <br />
              <span className="text-gradient"> I’m Darshana</span>
            </motion.h1>
            <p className="text-sm md:text-base mt-5">
              Full-Stack Developer with 6+ years of hands-on experience building
              high-performing and innovative web applications. Passionate about
              turning complex challenges into seamless digital experiences
              through clean code, scalable architecture, and user-focused
              design. Experienced in delivering reliable, efficient, and modern
              solutions that drive real business impact.
            </p>
            <span className="capitalize animate-bounce-fast duration-200 bg-green-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-green-500/20 text-green-500">
              Security Awareness
            </span>
            <span className="capitalize animate-bounce-slow duration-200 absolute right-0 bottom-5 bg-blue-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-blue-500/20 text-blue-500">
              Strong UI/UX sense
            </span>
            <span className="capitalize animate-bounce-fast duration-250 absolute right-0 top-20 bg-yellow-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-yellow-500/20 text-yellow-500">
              Optimized Code
            </span>
            <span className="capitalize animate-bounce duration-250 absolute left-40 md:left-1/2 -bottom-8 md:bottom-3 lg:-bottom-10 bg-indigo-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-indigo-500/20 text-indigo-500">
              Scalability
            </span>
          </div>
          <div className="w-full lg:w-1/2 bg-zinc-900 rounded-lg overflow-hidden">
            <MacHeader extention="reactjs" text="index" />
            <div className="h-[28rem] grid items-center">
              <CodeEditor />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-15 md:mt-24">
        <SectionHeading text="Technical" colorText="Expertise" />
        <Cards />
      </section>

      <StatsSection />

      <section className="mt-5 md:mt-28">
        <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-1">
            <SectionHeading
              align="text-left"
              text="Crafting Digital "
              colorText="Excellence"
            />
            <p className="text-sm md:text-base mt-3">
              Bringing ideas to life with cutting-edge web solutions that blend
              innovation, performance, and scalability. Every project is
              meticulously designed to meet unique business needs, ensuring
              seamless user experiences, robust security, and future-ready
              technology.
            </p>
            <p className="text-sm md:text-base mt-3">
              With expertise in modern development practices, I deliver
              tailor-made digital solutions across various industries—whether
              it’s dynamic online platforms or enterprise-grade applications. My
              focus remains on maximizing performance, maintaining security, and
              pushing the boundaries of excellence to create solutions that
              truly make an impact.
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:h-96">
            <Image
              src="/images/about.svg"
              width={800}
              height={300}
              alt="about-img"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="mt-15 md:mt-28 bg-zinc-800 py-10">
        <SectionHeading text="Projects I've" colorText="Brought to Life" />
        <HomeCard />
      </section>
    </main>
  );
};

export default HomePage;
