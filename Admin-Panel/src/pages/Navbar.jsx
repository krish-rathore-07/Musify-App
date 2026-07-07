
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
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl">
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
        {/* Left Side */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <div className="rounded-2xl bg-green-500 p-2.5 sm:p-3 shadow-lg shadow-green-500/30">
            <Music2 className="h-6 w-6 sm:h-7 sm:w-7 text-black" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-2xl sm:text-3xl font-black text-white">
                Musify
              </h1>
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
            </div>

            <p className="mt-1 hidden text-xs sm:block sm:text-sm text-gray-400">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-5">
          <button className="hidden md:flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#181818] shadow-lg transition-all duration-300 hover:bg-[#252525]">
            <Bell className="h-5 w-5 text-green-400" />
          </button>

          <div className="hidden lg:flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181818] px-4 py-3 shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-lg font-black text-black shadow-lg">
              {user?.email?.charAt(0).toUpperCase()}
            </div>

            <div className="max-w-[180px]">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white">Admin</h3>
                <ShieldCheck className="h-4 w-4 text-green-400" />
              </div>

              <p className="truncate text-sm text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 px-3 py-2.5 sm:px-5 sm:py-3 font-bold shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

