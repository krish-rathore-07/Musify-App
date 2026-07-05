import { useEffect, useState } from "react";
import {
  Music2,
  Sparkles,
  Disc3,
  Headphones,
} from "lucide-react";

import api from "../services/api";

import SongItem from "./SongItem";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Songs = () => {

  const [songs, setSongs] = useState([]);

  // Fetch Songs
  const fetchSongs = async () => {

    try {

      const response = await api.get("/api/songs");

      setSongs(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchSongs();

  }, []);

  return (
    <div className="flex bg-black text-white min-h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#121212] via-black to-[#0d0d0d]">

        {/* Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent border border-green-500/10 p-10 mb-14 shadow-2xl">

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-5">

                <Sparkles className="text-green-400 w-8 h-8" />

                <p className="uppercase tracking-[6px] text-green-400 text-sm font-semibold">
                  Trending Collection
                </p>

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
                Listen To The Best <span className="text-green-400">Songs</span>
              </h1>

              <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
                Stream your favorite tracks, discover new artists, and enjoy high-quality music without limits.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8 mt-10">

                <div className="flex items-center gap-3">

                  <Music2 className="text-green-400 w-7 h-7" />

                  <div>

                    <h3 className="text-2xl font-bold">
                      {songs.length}+
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Total Songs
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <Headphones className="text-pink-500 w-7 h-7" />

                  <div>

                    <h3 className="text-2xl font-bold">
                      HD
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Audio Quality
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <Disc3 className="text-yellow-400 w-7 h-7" />

                  <div>

                    <h3 className="text-2xl font-bold">
                      Unlimited
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Streaming
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Songs Header */}
          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-3">

              <Music2 className="text-green-400 w-8 h-8" />

              <h1 className="text-4xl font-bold">
                All Songs
              </h1>

            </div>

            <div className="bg-[#181818] border border-[#2a2a2a] px-5 py-3 rounded-full shadow-lg">

              <p className="text-gray-300">
                {songs.length} Tracks Available
              </p>

            </div>

          </div>

          {/* Songs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pb-10">

            {songs.map((song) => (
              <SongItem
                key={song.id}
                song={song}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Songs;