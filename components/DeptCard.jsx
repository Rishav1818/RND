import React from "react";

const DeptCard = ({ title, image }) => {
  return (
    <>
      <div className="p-4 w-80 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="h-72 bg-white shadow-lg text-center overflow-hidden">
          <div className="flex justify-center overflow-hidden relative mx-auto ">
            <img
              className="h-48 w-48 object-cover object-center rounded-full"
              src={image}
              alt="team"
            />
          </div>
          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {category}
            </h2> */}
            <h1 className="title-font text-center  text-lg font-bold text-black mb-3">
              {title}
            </h1>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DeptCard;
