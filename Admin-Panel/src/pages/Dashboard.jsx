import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Disc3,
  Music2,
  PlusCircle,
  ListMusic,
  LogOut,
  Sparkles,
} from "lucide-react";

const Dashboard = ({ children }) => {
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Add Album",
      path: "/add-album",
      icon: PlusCircle,
    },
    {
      name: "List Albums",
      path: "/list-albums",
      icon: Disc3,
    },
    {
      name: "Add Song",
      path: "/add-song",
      icon: Music2,
    },
    {
      name: "List Songs",
      path: "/list-songs",
      icon: ListMusic,
    },
  ];

  return (
    <div className="min-h-screen flex bg-black text-white overflow-hidden">
      {/* ================= Desktop Sidebar ================= */}
      <div className="hidden md:flex md:w-64 lg:w-72 xl:w-[300px] bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] border-r border-white/10 flex-col justify-between p-5 lg:p-6 shadow-2xl">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 lg:gap-4 mb-10 lg:mb-14">
            <div className="bg-green-500 p-3 lg:p-4 rounded-2xl shadow-lg shadow-green-500/30">
              <Music2 className="text-black w-6 h-6 lg:w-8 lg:h-8" />
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl font-black">
                Musify
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`group flex items-center gap-4 px-4 lg:px-5 py-3 lg:py-4 rounded-2xl transition-all duration-300 ${
                    active
                      ? "bg-green-500 text-black shadow-lg shadow-green-500/30"
                      : "bg-[#181818] hover:bg-[#252525] text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />

                  <span className="font-semibold text-base lg:text-lg">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Info Card */}
          <div className="mt-8 lg:mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#101010] border border-white/10 rounded-3xl p-5 lg:p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-green-400 w-6 h-6 lg:w-7 lg:h-7" />

              <h2 className="text-lg lg:text-xl font-bold">
                Musify Studio
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Manage albums, upload songs, and control your entire music
              platform beautifully.
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all duration-300 py-3 lg:py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* ================= Main Section ================= */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#121212] via-[#101010] to-black min-w-0">
        {/* Top Navbar */}
        <div className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 md:px-8 py-4 md:py-5 flex items-center justify-between shadow-xl">
          <div>
            <h1 className="text-2xl md:text-3xl font-black">
              Dashboard
            </h1>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
              Welcome back to Musify Admin
            </p>
          </div>

          {/* Admin Badge */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-[#181818] border border-white/10 px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-2xl shadow-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-black text-lg md:text-xl">
              A
            </div>

            <div className="hidden sm:block">
              <h3 className="font-bold">
                Admin
              </h3>

              <p className="text-gray-400 text-sm">
                Full Access
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-24 md:pb-10">
          {children}
        </div>
      </div>

      {/* ================= Mobile Bottom Navigation ================= */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-[#111111]/95 backdrop-blur-xl border-t border-white/10">
        <div className="grid grid-cols-5">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex flex-col items-center justify-center py-3 transition-all ${
                  active
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />

                <span className="text-[10px] font-medium text-center">
                  {item.name.split(" ")[0]}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;