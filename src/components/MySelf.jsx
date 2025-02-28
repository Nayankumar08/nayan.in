import React from "react";

const MySelf = () => {
  return (
    <div className=" your-class absolute top-[120px] right-10 w-[300px] bg-black p-5 rounded-xl shadow-lg">
      <div className="flex flex-col items-center">
        <img className="w-40 h-40 rounded-full object-cover" src="nayan.jpeg" alt="Nayan Kumar" />
        <h1 className="text-lg font-bold mt-3 text-white">NAYAN KUMAR</h1>
        <h3 className="text-gray-400 text-center mt-2">
          <i>
            I have to learn new technologies and would like to contribute along with upgrading my skills and knowledge.
          </i>
        </h3>
        <button className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg">For more</button>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4">
          <i className="fa-brands fa-facebook text-2xl text-blue-700"></i>
          <i className="fa-brands fa-square-twitter text-2xl text-blue-400"></i>
          <i className="fa-brands fa-youtube text-2xl text-red-600"></i>
          <i className="fa-brands fa-telegram text-2xl text-blue-500"></i>
          <i className="fa-brands fa-linkedin text-2xl text-blue-600"></i>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-square-instagram text-2xl text-pink-500"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
