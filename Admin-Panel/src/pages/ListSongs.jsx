import { useEffect, useState } from "react";
import {
  Music2,
  Trash2,
  Sparkles,
  Disc3,
  AudioLines,
} from "lucide-react";

import Dashboard from "./Dashboard";
import api from "../services/api";

const ListSongs = () => {

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

  // Delete Song
  const deleteSong = async (id) => {

    try {

      await api.delete(`/api/songs/${id}`);

      alert("Song Deleted");

      fetchSongs();

    } catch (error) {

      console.log(error);

      alert("Failed to delete song");
    }
  };

  useEffect(() => {

    fetchSongs();

  }, []);

  return (
    <Dashboard>

      <div className="min-h-screen text-white">

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-400/10 to-transparent border border-green-500/10 p-10 mb-12 shadow-2xl">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-5">

              <Sparkles className="text-green-400 w-8 h-8" />

              <p className="uppercase tracking-[6px] text-green-400 text-sm font-semibold">
                Song Management
              </p>

            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              All <span className="text-green-400">Songs</span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Manage your music library, organize tracks, and remove songs from your Musify platform.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-5 mt-10">

              <div className="bg-[#181818] border border-white/10 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">

                <Music2 className="text-green-400 w-8 h-8" />

                <div>

                  <h3 className="text-2xl font-bold">
                    {songs.length}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Total Songs
                  </p>

                </div>

              </div>

              <div className="bg-[#181818] border border-white/10 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">

                <AudioLines className="text-pink-500 w-8 h-8" />

                <div>

                  <h3 className="text-2xl font-bold">
                    HD
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Audio Quality
                  </p>

                </div>

              </div>

              <div className="bg-[#181818] border border-white/10 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">

                <Disc3 className="text-yellow-400 w-8 h-8" />

                <div>

                  <h3 className="text-2xl font-bold">
                    Musify
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Music Collection
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Songs List */}
        <div className="flex flex-col gap-6">

          {songs.map((song) => (

            <div
              key={song.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl hover:border-green-500/30 transition-all duration-300"
            >

              {/* Left Side */}
              <div className="flex items-center gap-6">

                {/* Song Image */}
                <div className="relative">

                  <img
                    src={`http://localhost:8080/images/${song.image}`}
                    alt={song.title}
                    className="w-28 h-28 object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-105"
                  />

                  {/* Glow */}
                  <div className="absolute inset-0 bg-green-500/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                </div>

                {/* Song Details */}
                <div>

                  <h2 className="text-3xl font-black">
                    {song.title}
                  </h2>

                  <p className="text-gray-400 mt-3 text-lg">
                    {song.artist}
                  </p>

                  {/* Badge */}
                  <div className="mt-5 inline-flex items-center gap-2 bg-[#181818] border border-white/10 px-4 py-2 rounded-full">

                    <Music2 className="text-green-400 w-4 h-4" />

                    <span className="text-sm text-gray-300">
                      Music Track
                    </span>

                  </div>

                </div>

              </div>

              {/* Audio + Delete */}
              <div className="flex flex-col md:flex-row items-center gap-5">

                {/* Audio Preview */}
                <audio
                  controls
                  className="w-[280px]"
                  src={`http://localhost:8080/audio/${song.audio}`}
                />

                {/* Delete Button */}
                <button
                  onClick={() => deleteSong(song.id)}
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all duration-300 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold"
                >

                  <Trash2 className="w-5 h-5" />

                  Delete Song

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </Dashboard>
  );
};

export default ListSongs;