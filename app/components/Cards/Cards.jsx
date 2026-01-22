"use client";
import React from "react";
import Card from "./Card";

const Cards = () => {
  const devskills = [
    { icon: "ri-terminal-window-line text-purple-500", title: "CMS", skills: ["WordPress", "WooCommerce", "Squarespace", "Shopify", "Webflow", "Flynax", "Wix", "Processwire"] },
    { icon: "ri-code-s-slash-line text-blue-500", title: "Front-End Development", skills: ["ReactJS", "NextJS", "JavaScript", "TypeScript", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript frameworks"] },
    { icon: "ri-database-2-line text-green-500", title: "Database Excellence", skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
    { icon: "ri-cloud-line text-yellow-500", title: "API Creation/Implementation", skills: ["GraphQL", "RestAPI", "ChatGPT API", "Wized"] },
    { icon: "ri-server-line text-red-500", title: "Back-End Development", skills: ["Laravel", "CodeIgniter", "NextJS", "NodeJS",'Express.js'] },
    { icon: "ri-git-repository-commits-line text-indigo-500", title: "Other Technologies", skills: ["Git", "GitHub", "Bitbucket", "AWS", "Azure", "Google Cloud"] },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-5">
      {devskills.map((data) => (
        <Card key={data.title} data={data} />
      ))}
    </div>
  );
};

export default Cards;
