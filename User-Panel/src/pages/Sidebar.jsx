import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Music2,
  Disc3,
  Heart,
  Library,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {

  const location = useLocation();

  return (
    <div className="hidden md:flex w-[290px] min-h-screen bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] border-r border-white/10 text-white flex-col justify-between px-6 py-8 shadow-2xl">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-4 mb-12">

          <div className="bg-green-500 p-3 rounded-2xl shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-8 h-8" />

          </div>

          <div>

            <h1 className="text-3xl font-black tracking-wide">
              Musify
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Feel The Music
            </p>

          </div>

        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">

          {/* Home */}
          <Link
            to="/home"
            className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
              location.pathname === "/home"
                ? "bg-green-500 text-black shadow-lg shadow-green-500/30"
                : "bg-[#181818] hover:bg-[#252525] text-white"
            }`}
          >

            <Home className="w-6 h-6" />

            <span className="font-semibold text-lg">
              Home
            </span>

          </Link>

          {/* Songs */}
          <Link
            to="/songs"
            className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
              location.pathname === "/songs"
                ? "bg-green-500 text-black shadow-lg shadow-green-500/30"
                : "bg-[#181818] hover:bg-[#252525] text-white"
            }`}
          >

            <Disc3 className="w-6 h-6" />

            <span className="font-semibold text-lg">
              Songs
            </span>

          </Link>

          {/* Search */}
          <Link
            to="/search"
            className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
              location.pathname === "/search"
                ? "bg-green-500 text-black shadow-lg shadow-green-500/30"
                : "bg-[#181818] hover:bg-[#252525] text-white"
            }`}
          >

            <Sparkles className="w-6 h-6" />

            <span className="font-semibold text-lg">
              Search
            </span>

          </Link>

        </div>

        {/* Library Card */}
        <div className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#101010] border border-white/10 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center gap-3 mb-4">

            <Library className="text-green-400 w-7 h-7" />

            <h2 className="text-xl font-bold">
              Your Library
            </h2>

          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Save your favorite tracks, albums, and playlists to access them anytime.
          </p>

          <button className="mt-6 bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:shadow-green-500/30 w-full">
            Explore Music
          </button>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-[#181818] border border-white/10 rounded-3xl p-5 shadow-lg">

        <div className="flex items-center gap-3">

          <div className="bg-pink-500/20 p-3 rounded-full">

            <Heart className="text-pink-500 w-6 h-6" />

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Premium User
            </h3>

            <p className="text-gray-400 text-sm">
              Enjoy ad-free music
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;