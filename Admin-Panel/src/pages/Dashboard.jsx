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

      {/* Sidebar */}
      <div className="hidden md:flex w-[300px] bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] border-r border-white/10 flex-col justify-between p-6 shadow-2xl">

        {/* Top */}
        <div>

          {/* Logo */}
          <div className="flex items-center gap-4 mb-14">

            <div className="bg-green-500 p-4 rounded-2xl shadow-lg shadow-green-500/30">

              <Music2 className="text-black w-8 h-8" />

            </div>

            <div>

              <h1 className="text-3xl font-black">
                Musify
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Admin Panel
              </p>

            </div>

          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">

            {menuItems.map((item, index) => {

              const Icon = item.icon;

              const active = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                    active
                      ? "bg-green-500 text-black shadow-lg shadow-green-500/30"
                      : "bg-[#181818] hover:bg-[#252525] text-white"
                  }`}
                >

                  <Icon className="w-6 h-6" />

                  <span className="font-semibold text-lg">
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </div>

          {/* Info Card */}
          <div className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#101010] border border-white/10 rounded-3xl p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-4">

              <Sparkles className="text-green-400 w-7 h-7" />

              <h2 className="text-xl font-bold">
                Musify Studio
              </h2>

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Manage albums, upload songs, and control your entire music platform beautifully.
            </p>

          </div>

        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all duration-300 py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold text-lg"
        >

          <LogOut className="w-5 h-5" />

          Logout

        </button>

      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#121212] via-[#101010] to-black">

        {/* Top Navbar */}
        <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 px-8 py-5 flex items-center justify-between shadow-xl">

          <div>

            <h1 className="text-3xl font-black">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-1">
              Welcome back to Musify Admin
            </p>

          </div>

          {/* Admin Badge */}
          <div className="flex items-center gap-4 bg-[#181818] border border-white/10 px-5 py-3 rounded-2xl shadow-lg">

            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-black text-xl">
              A
            </div>

            <div>

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
        <div className="flex-1 overflow-y-auto p-6 md:p-10">

          {children}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;