import React from "react";

const MacHeader = ({ text, link, extention, stack }) => {
  const cleanedExt = extention?.split(" ").join("").toLowerCase();

  const language =
    cleanedExt === "webflow"
      ? "nocode"
      : cleanedExt === "shopify"
      ? "liquid"
      : cleanedExt === "reactjs" || cleanedExt === "nextjs"
      ? "jsx"
      : "php";

  return (
    <div className="relative z-[3] flex shrink-0 items-center gap-1.5 px-3 py-2 bg-zinc-950">
      <span className={`size-2 rounded-full inline-block bg-red-600`}></span>
      <span className={`size-2 rounded-full inline-block bg-yellow-600`}></span>
      <span className={`size-2 rounded-full inline-block bg-green-600`}></span>
      <div className="flex items-center justify-between w-full">
        <p className="text-base text-zinc-300 md:ml-5 ml-1">
          {text}.{language}
        </p>
        <div className="flex items-center gap-3">
          {stack && (
            <p className="text-xs text-white font-medium bg-emerald-800 px-3 py-1.5 rounded-md">
              {stack}
            </p>
          )}
          {link && (
            <a target="_blank" href={link} rel="noopener noreferrer">
              <i className="ri-external-link-line text-xl hover:text-blue-500 duration-300"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MacHeader;
