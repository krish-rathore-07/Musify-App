import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Disc3,
  Music2,
  ListMusic,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {

  const location = useLocation();

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
    <div className="hidden md:flex w-[300px] min-h-screen bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d] border-r border-white/10 flex-col justify-between p-6 shadow-2xl">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-4 mb-14">

          <div className="bg-green-500 p-4 rounded-2xl shadow-lg shadow-green-500/30">

            <Music2 className="text-black w-8 h-8" />

          </div>

          <div>

            <h1 className="text-3xl font-black text-white">
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

            <h2 className="text-xl font-bold text-white">
              Musify Studio
            </h2>

          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Upload songs, manage albums, and control your entire music platform from one place.
          </p>

          <button className="mt-6 w-full bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-3 rounded-2xl shadow-lg hover:shadow-green-500/30">
            Explore Dashboard
          </button>

        </div>

      </div>

      {/* Bottom Card */}
      <div className="bg-[#181818] border border-white/10 rounded-3xl p-5 shadow-lg">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-green-500/30">
            M
          </div>

          <div>

            <h3 className="font-bold text-white text-lg">
              Musify Admin
            </h3>

            <p className="text-gray-400 text-sm">
              Full Access Enabled
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;