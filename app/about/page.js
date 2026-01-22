import React from "react";
import PageHeading from "../components/PageHeading";

const page = () => {
  return (
    <main className="w-full min-h-screen pt-10">
      <PageHeading text="The Story Behind" colorText="the Code" />
      <section className="w-[90%] mx-auto mt-10">
        <h3 className="text-lg md:text-2xl font-bold mt-5">
          Full-Stack Development Expertise
        </h3>
        <p className="text-sm md:text-base mt-3">
          With <span className="font-bold">6 years of hands-on experience</span> in designing and developing
          dynamic, high-performance web applications, I have honed my skills as
          a <span className="font-bold">Full-Stack Developer</span>. My expertise spans both <span className="font-bold">client-side and
          server-side</span> technologies, including <span className="font-bold">React, Next.js, Laravel,
          CodeIgniter, and Node.js</span>.
        </p>
        <p className="text-sm md:text-base mt-3">
        From crafting seamless UI/UX experiences using <span className="font-bold">Tailwind, Bootstrap, and modern JavaScript frameworks</span>, to building <span className="font-bold">scalable backend solutions</span> with <span className="font-bold">MySQL, PostgreSQL, MongoDB, and Firebase</span>, I ensure that every project is optimized for <span className="font-bold">speed, security, and scalability</span>.
        </p>
      </section>

      <section className="w-[90%] mx-auto mt-10">
        <h3 className="text-lg md:text-2xl font-bold mt-5">
          Custom Solutions Across Multiple Platforms
        </h3>
        <p className="text-sm md:text-base mt-3">
          My versatility extends to CMS platforms like <span className="font-bold">WordPress, Shopify,
          Webflow, and Squarespace</span>, where I build tailored solutions that align
          with business needs. With deep knowledge of <span className="font-bold">API development, cloud
          services, and version control systems (Git, Bitbucket)</span>, I ensure that
          every project is built with <span className="font-bold">modern standards and peak performance</span> in
          mind.
        </p>
        <p className="text-sm md:text-base mt-3">
          Whether it’s custom eCommerce platforms, SaaS applications, or
          subscription-based services, I focus on delivering user-centric,
          future-proof solutions that elevate digital experiences.
        </p>
      </section>
      <section className="w-[90%] mx-auto mt-10">
        <h3 className="text-lg md:text-2xl font-bold mt-5">
          Innovation & Excellence in Every Project
        </h3>
        <p className="text-sm md:text-base mt-3">
          Over the years, I have worked on diverse projects, from <span className="font-bold">real estate
          portals and fintech applications to AI-driven software and
          e-marketplaces</span>. I thrive on solving complex challenges through
          <span className="font-bold">cutting-edge technologies and creative problem-solving</span>.
        </p>
        <p className="text-sm md:text-base mt-3">
        With a keen eye for detail and a passion for innovation, I stay ahead of modern trends, pushing the boundaries of what’s possible in web development. My commitment to <span className="font-bold">excellence, adaptability, and reliability</span> ensures that every project I undertake not only meets industry benchmarks but <span className="font-bold">sets new standards in digital innovation</span>.
        </p>
      </section>
    </main>
  );
};

export default page;
