import React from "react";
import StickyCards from "./StickyCards";

const HomeCard = () => {
  const data = [
    {
      title: "Bankrate",
      link: "https://www.bankrate.com/",
      img: "/images/websites/bankrate.webp",
      description:
        "Financial guidance platform offering expert advice on mortgages, credit cards, loans, and personal finance.",
      tech: ["NextJS"],
    },
    {
      title: "Dextall",
      link: "https://www.dextall.com/",
      img: "/images/websites/dextail.webp",
      description:
        "A construction technology company specializing in prefabricated building facades for energy-efficient structures.",
      tech: ["Webflow", "ThreeJs"],
    },
    {
      title: "Estatemate",
      link: "https://www.estatemate.co.za/",
      img: "/images/websites/estatemate.webp",
      description:
        "A property management platform for homeowners and communities in South Africa, streamlining communication and maintenance.",
      tech: ["ReactJS"],
    },
    {
      title: "King-Realty-Group",
      link: "https://king-realtygroup.com/",
      img: "/images/websites/king.webp",
      description:
        "Real estate agency specializing in buying, selling, and investing in properties.",
      tech: ["Laravel"],
    },
    {
      title: "Patient10x",
      link: "https://www.patient10x.com/",
      img: "/images/websites/patient.webp",
      description:
        "Healthcare growth platform helping medical businesses enhance patient acquisition and engagement.",
      tech: ["Webflow"],
    },
    {
      title: "Provideofactory",
      link: "https://provideofactory.com/",
      img: "/images/websites/provideofactory.webp",
      description:
        "Video production service creating marketing and explainer videos for businesses.",
      tech: ["Laravel"],
    },
    {
      title: "Rapid Clean",
      link: "https://rapidclean.com.au/",
      img: "/images/websites/rapidclean.webp",
      description:
        "Supplier of cleaning products and equipment for commercial and industrial sectors.",
      tech: ["Woocommerce", "WordPress", "PHP"],
    },
    {
      title: "Storyblocks",
      link: "https://www.storyblocks.com/",
      img: "/images/websites/storyblocks.webp",
      description:
        "Subscription-based stock media platform offering royalty-free videos, images, and audio.",
      tech: ["Laravel"],
    },
    {
      title: "Unibuddy",
      link: "https://unibuddy.com/",
      img: "/images/websites/unibuddy.webp",
      description:
        "Student engagement platform connecting prospective students with university ambassadors for guidance.",
      tech: ["ReactJS"],
    },
  ];

  return (
    <div className="mt-5 w-[90%]  mx-auto grid gap-10">
      {data.map((data, index) => (
        <StickyCards data={data} index={index} key={`work${index}`} />
      ))}
    </div>
  );
};

export default HomeCard;
