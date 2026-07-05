import { useNavigate } from "react-router-dom";
import {
  Music2,
  LogOut,
  ShieldCheck,
  Sparkles,
  Bell,
} from "lucide-react";

const Navbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10 px-6 md:px-10 py-5 flex items-center justify-between shadow-2xl">

      {/* Left Side */}
      <div className="flex items-center gap-5">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="bg-green-500 p-3 rounded-2xl shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-7 h-7" />

          </div>

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-3xl font-black text-white">
                Musify
              </h1>

              <Sparkles className="text-green-400 w-5 h-5" />

            </div>

            <p className="text-gray-400 text-sm mt-1">
              Admin Dashboard
            </p>

          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="hidden md:flex w-12 h-12 rounded-2xl bg-[#181818] border border-white/10 items-center justify-center hover:bg-[#252525] transition-all duration-300 shadow-lg">

          <Bell className="text-green-400 w-5 h-5" />

        </button>

        {/* User Info */}
        <div className="hidden sm:flex items-center gap-4 bg-[#181818] border border-white/10 px-5 py-3 rounded-2xl shadow-lg">

          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-black text-lg shadow-lg">

            {user?.email?.charAt(0).toUpperCase()}

          </div>

          {/* User Details */}
          <div>

            <div className="flex items-center gap-2">

              <h3 className="font-bold text-white">
                Admin
              </h3>

              <ShieldCheck className="text-green-400 w-4 h-4" />

            </div>

            <p className="text-gray-400 text-sm">
              {user?.email}
            </p>

          </div>

        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold"
        >

          <LogOut className="w-5 h-5" />

          <span className="hidden md:block">
            Logout
          </span>

        </button>

      </div>

    </div>
  );
};

export default Navbar;