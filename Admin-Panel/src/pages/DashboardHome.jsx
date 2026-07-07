import {
  Music2,
  Disc3,
  Users,
  Activity,
  PlusCircle,
  ListMusic,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import api from "../services/api";
import { useState,useEffect } from "react";

const DashboardHome = () => {

const [albums, setAlbums] = useState([]);
const [songs, setSongs] = useState([]);
useEffect(() => {
  fetchSongs();
   fetchAlbums();
}, []);
const fetchSongs = async () => {
  try {
    const response = await api.get("/api/songs");
    setSongs(response.data);
  } catch (error) {
    console.log(error);
  }
};
const fetchAlbums = async () => {
    try {
      const response = await api.get("/api/albums");
      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const totalArtists = new Set(
  songs.map((song) => song.artist.trim().toLowerCase())
).size;

  const stats = [
    {
      title: "Total Songs",
      value: songs.length,
      icon: Music2,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Albums",
      value: albums.length,
      icon: Disc3,
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Artists",
      value: totalArtists,
      icon: Users,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Uploads",
      value: songs.length + albums.length,
      icon: Activity,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  const activities = [
    "🎵 New song uploaded",
    "💿 Album created",
    "⭐ Playlist updated",
    "🎤 Artist profile modified",
  ];

  return (
    <Dashboard>
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/20 via-[#181818] to-[#101010] p-6 md:p-10">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-green-500/20 blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                <Sparkles size={18} />
                Musify Studio
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                Welcome Back,
                <br />
                Admin 👋
              </h2>

              <p className="mt-4 max-w-xl text-gray-300">
                Manage albums, upload songs, organize artists and keep your
                music platform running smoothly with Musify Studio.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/add-song"
                  className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black transition hover:scale-105"
                >
                  Add Song
                </Link>

                <Link
                  to="/add-album"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  Add Album
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="rounded-full bg-green-500/10 p-10">
                <Music2 className="h-36 w-36 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#181818] p-6 transition hover:-translate-y-1 hover:border-green-500/40"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >
                  <Icon className="text-black" />
                </div>

                <h3 className="mt-6 text-gray-400">{item.title}</h3>

                <h2 className="mt-2 text-4xl font-black">{item.value}</h2>
              </div>
            );
          })}
        </div>

        {/* Middle Section */}
        <div className="grid gap-6 xl:grid-cols-3">
          {/* Activity */}
          <div className="rounded-3xl border border-white/10 bg-[#181818] p-6">
            <h3 className="mb-6 text-2xl font-bold">
              Recent Activity
            </h3>

            <div className="space-y-4">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#222] p-4 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Upload Analytics */}
          <div className="rounded-3xl border border-white/10 bg-[#181818] p-6">
            <h3 className="mb-6 text-2xl font-bold">
              Weekly Uploads
            </h3>

            <div className="space-y-5">
              {[90, 60, 80, 45, 95, 70, 50].map((width, index) => (
                <div key={index}>
                  <div className="mb-2 flex justify-between text-sm text-gray-400">
                    <span>Day {index + 1}</span>
                    <span>{width}%</span>
                  </div>

                  <div className="h-3 rounded-full bg-[#2d2d2d]">
                    <div
                      style={{ width: `${width}%` }}
                      className="h-3 rounded-full bg-green-500"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-white/10 bg-[#181818] p-6">
            <h3 className="mb-6 text-2xl font-bold">
              Quick Actions
            </h3>

            <div className="space-y-4">
              <Link
                to="/add-song"
                className="flex items-center justify-between rounded-2xl bg-green-500 p-4 font-bold text-black transition hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <Music2 />
                  Add Song
                </div>

                <ArrowRight />
              </Link>

              <Link
                to="/add-album"
                className="flex items-center justify-between rounded-2xl bg-purple-500 p-4 font-bold text-white transition hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <PlusCircle />
                  Add Album
                </div>

                <ArrowRight />
              </Link>

              <Link
                to="/list-songs"
                className="flex items-center justify-between rounded-2xl bg-[#252525] p-4 transition hover:bg-[#303030]"
              >
                <div className="flex items-center gap-3">
                  <ListMusic />
                  View Songs
                </div>

                <ArrowRight />
              </Link>

              <Link
                to="/list-albums"
                className="flex items-center justify-between rounded-2xl bg-[#252525] p-4 transition hover:bg-[#303030]"
              >
                <div className="flex items-center gap-3">
                  <Disc3 />
                  View Albums
                </div>

                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default DashboardHome;