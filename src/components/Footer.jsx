"use client";
import { FaInstagram, FaMusic, FaPause, FaHeart } from "react-icons/fa";

const Footer = ({ togglePlay, isPlaying }) => {
  return (
    <footer className="py-8 px-4 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://instagram.com"
            className="text-slate-600 hover:text-slate-700 text-xl"
          >
            <FaInstagram />
          </a>

          {/* === MUSIC BUTTON === */}
          <button
            onClick={togglePlay}
            className={`text-xl ${isPlaying ? "text-slate-600" : "text-gray-400"}`}
          >
            {isPlaying ? <FaPause /> : <FaMusic />}
          </button>
        </div>

        {/* Developer Credit */}
        <p className="text-gray-600 text-sm flex justify-center items-center gap-1">
          Develop with <FaHeart className="text-slate-500" /> by wlrudi19
        </p>

        {/* Template Credit */}
        <p className="text-gray-600 text-sm flex justify-center items-center gap-1">
          Template by KetutWeb • © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;