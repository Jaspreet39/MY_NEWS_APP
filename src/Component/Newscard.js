import React from "react";

const NewsCard = ({ title, image, description, content }) => {
  return (
    <div className="w-full h-fit ">
      <img src={image} alt="" className="w-full h-auto object-contain " />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-[1.1rem] text-gray-600 mt-6 font-semibold">
        {description}
      </p>
      <p className="text-[1.1rem] text-gray-600 mt-6 font-semibold">
        {content}
      </p>
    </div>
  );
};

export default NewsCard;
