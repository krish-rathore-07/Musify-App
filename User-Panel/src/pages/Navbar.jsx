import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  LogOut,
  UserCircle2,
} from "lucide-react";

const Navbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [search, setSearch] = useState("");

  // Logout
  const logout = () => {

    localStorage.removeItem("user");

    navigate("/");
  };

  // Search
  const handleSearch = (e) => {

    e.preventDefault();

    navigate(`/search?query=${search}`);
  };

  return (
    <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-lg">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => navigate(-1)}
          className="w-11 h-11 rounded-full bg-[#181818] hover:bg-[#282828] transition duration-300 flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        <button
          onClick={() => navigate(1)}
          className="w-11 h-11 rounded-full bg-[#181818] hover:bg-[#282828] transition duration-300 flex items-center justify-center shadow-md"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>

      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center bg-[#181818] border border-[#2a2a2a] focus-within:border-green-500 transition rounded-full px-4 py-3 w-[450px] shadow-lg"
      >

        <Search className="text-gray-400 w-5 h-5" />

        <input
          type="text"
          placeholder="Search songs, albums, artists..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-white placeholder-gray-500 outline-none ml-3 w-full"
        />

      </form>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* User */}
        <div className="hidden md:flex items-center gap-3 bg-[#181818] border border-[#2a2a2a] px-4 py-2 rounded-full shadow-md">

          <UserCircle2 className="text-green-400 w-7 h-7" />

          <div className="flex flex-col">

            <span className="text-white text-sm font-semibold">
              {user?.email?.split("@")[0]}
            </span>

            <span className="text-gray-400 text-xs">
              Premium User
            </span>

          </div>

        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all duration-300 px-5 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold"
        >

          <LogOut className="w-4 h-4" />

          <span className="hidden md:block">
            Logout
          </span>

        </button>

      </div>

    </div>
  );
};

export default Navbar;