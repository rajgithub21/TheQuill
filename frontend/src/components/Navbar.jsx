import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <div className="flex items-center gap-2">
        <img className="w-15 h-15 object-contain" src={assets.pp2} alt="" />
        <h1 className="text-5xl mt-2 font-black">TheQuill</h1>
      </div>

      <div className="flex items-center gap-4">
        {!token && (
          <button
            onClick={() => navigate("/write-blog")}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-green-600 text-white px-6 py-2.5 hover:bg-green-700 transition-colors"
          >
            <img src={assets.blog_icon} className="w-4 h-4" alt="write" />
            Write a Blog
          </button>
        )}

        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          {token ? "Dashboard" : "Login"}
          <img src={assets.arrow} className="w-3" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
